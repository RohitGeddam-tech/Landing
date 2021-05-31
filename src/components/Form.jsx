import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import useToggle from './Valid'


const Form = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailID, setEmailID] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneNoInvalid, setPhoneNoInvalid] = useState(false);
  const [emailIDInvalid, setEmailIDInvalid] = useState(false);
  // const [validity, setValidity] = useState(false);
  const [isValid, setIsValid] = useState(false)
  const [form, setForm] = useState({});
  const [formEmpty, setFormEmpty] = useState(false);

  // const [isOn, toggleIsOn] = useToggle();

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

  console.log('form value', form)
  // const toggle = React.useCallback(() => setIsValid(!isValid))

  const handleSubmit = (e) => {

    if (!(nameInvalid && phoneNoInvalid && emailIDInvalid)) {
      setIsValid(!isValid);
      setForm({
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phoneNo: phoneNo,
        emailID: emailID,
      });
      console.log('validity true')
    } else {
      setIsValid(false);
      console.log('validity false')
    }
    console.log('vaidity trueor false: ', !isValid)

    if(isValid === false){
      setFormEmpty(false);
      setIsValid(false);
    } else {
      setFormEmpty(true);
    }

    e.preventDefault();
    console.log('data: ',name,phoneNo,emailID)
    console.log('formempty',formEmpty)
  };

  return (
    <form
      className='formContainer'
      onSubmit={handleSubmit}
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
          Send
        </button>
      </div>
      {formEmpty ? <p className='p'>Please fill in the form</p> : ""}
    </form>
  );
};

export default Form;
