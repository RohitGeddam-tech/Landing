import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";


const Form = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailID, setEmailID] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneNoInvalid, setPhoneNoInvalid] = useState(false);
  const [emailIDInvalid, setEmailIDInvalid] = useState(false);
  const [validity, setValidity] = useState(false);
  const [form, setForm] = useState({});
  const [formEmpty, setFormEmpty] = useState(false);

  // const classes = useStyles();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        setNameInvalid(!e.target.validity.valid);
        break;
      case "phoneNo":
        setPhoneNo(e.target.value);
        setPhoneNoInvalid(!e.target.validity.valid);
        break;
      case "emailID":
        setEmailID(e.target.value);
        setEmailIDInvalid(!e.target.validity.valid);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every((each) => each === "")) {
      setFormEmpty(true);
      setValidity(false);
    } else {
      setFormEmpty(false);
    }

    if (!(nameInvalid || phoneNoInvalid || emailIDInvalid)) {
      setValidity(true);
      setForm({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phoneNo: phoneNo,
        emailID: emailID,
      });
    } else {
      setValidity(false);
    }

    console.log(form);
  };

  return (
    <form
      className='formContainer'
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <p className='para'>Want us to call you? Fill in your details</p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        className='textField'
        name="name"
        value={name}
        onChange={handleChange}
        inputProps={{ pattern: "^([A-Za-z ,.'`-]{2,30})$" }}
        type="text"
        required
      />
      {nameInvalid ? (
        <p className='p'>Please provide a valid name</p>
      ) : (
        ""
      )}
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="emailID"
        className='textField'
        value={emailID}
        onChange={handleChange}
        inputProps={{
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
        }}
        type="email"
        required
      />
      {emailIDInvalid ? (
        <p className='p'>Please provide a valid email</p>
      ) : (
        ""
      )}
      <TextField
        id="outlined-basic"
        label="Phone No."
        variant="outlined"
        className='textField'
        name="phoneNo"
        value={phoneNo}
        onChange={handleChange}
        inputProps={{
          pattern: "^[0-9]{10}$",
        }}
        type="tel"
        required
      />
      {phoneNoInvalid ? (
        <p className='p'>Please provide a valid mobile number</p>
      ) : (
        ""
      )}
      <div className='alignbtn'>
        <button type="submit" className="button">
          Submit
        </button>
      </div>
      {formEmpty ? <p className='p'>Please fill in the form</p> : ""}
    </form>
  );
};

export default Form;
