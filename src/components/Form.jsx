import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { getUtmSerializedString } from "../utils/common";

const defaultFormState = {
  name: "",
  mobile: "",
  email: "",
};

const Form = () => {
  const [details, setDetails] = useState({ ...defaultFormState });
  const [error, setError] = useState({});
  const [btnLoading, setBtnLoading] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const tempDetails = { ...details },
      tempError = { ...error };
    tempDetails[e.target.name] = e.target.value;
    tempError[e.target.name] = "";
    setDetails(tempDetails);
    setError(tempError);
  };

  const validateForm = () => {
    const tempError = { ...error };
    var nameRegExp = /^[A-Za-z\s]+$/,
      emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      phoneRegExp = /^[0-9]{10}$/;

    tempError.name =
      (!details.name && "The name field is required.") ||
      (!nameRegExp.test(details.name) && "The name field is invalid.");

    tempError.mobile =
      (!details.mobile && "The phone number field is required.") ||
      (!phoneRegExp.test(details.mobile) &&
        "The phone number field is invalid.");

    tempError.email =
      (!details.email && "The email field is required.") ||
      (!emailRegExp.test(details.email) && "The email field is invalid.");

    setError(tempError);
    return Object.values(tempError).some((val) => val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    setBtnLoading(true);
    const errorExist = validateForm();

    // make api call only if there are no errors
    if (!errorExist) { 
      const data = {
        ...details,
        type : "Landing Page",
        description: getUtmSerializedString(),
      };
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_PUBLIC_URL}/contact_us`,
          data
        );
        if (response) {
          setBtnLoading(false);
          const {
            message = "Your details has been saved, We will contact you shortly!",
          } = response.data;
          setDetails({...defaultFormState})
          setAlertState({ open: true, message, type: "success" });
          sessionStorage.removeItem("utm_content");
        }
      } catch (err) {
        err.response && setBtnLoading(false);
        const { message = "Sorry! We are unable to process your request." } =
          (err.response && err.response.data) || {};
        message && setAlertState({ open: true, message, type: "error" });
      }
    } else setBtnLoading(false);
  };

  const handleAlertClose = () => {
    setAlertState({ open: false, message: "", type: "" });
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <p className="para">Want us to call you? Fill in your details</p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className="textField"
        name="name"
        value={details.name}
        onChange={handleChange}
        type="text"
      />
      {error && error.name ? <p className="error-text">{error.name}</p> : null}
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        className="textField"
        value={details.email}
        onChange={handleChange}
        type="text"
      />
      {error && error.email ? (
        <p className="error-text">{error.email}</p>
      ) : null}
      <TextField
        id="outlined-basic"
        label="Phone No."
        variant="outlined"
        className="textField"
        name="mobile"
        value={details.mobile}
        onChange={handleChange}
        type="tel"
      />
      {error && error.mobile ? (
        <p className="error-text">{error.mobile}</p>
      ) : null}
      <div className="alignbtn">
        <button type="submit" className="button" aria-label='submit' disabled={btnLoading}>
          {btnLoading ? "Sending..." : "Send"}
        </button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alertState.open}
        onClose={handleAlertClose}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertState.type}
          variant="filled"
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Form;
