import React from "react";
import { NavHashLink } from "react-router-hash-link";

const ContactRedirectBtn = ({ name, content, className = "button" }) => {
  return (
    <NavHashLink
      to="/Landing#contact"
      className={className}
      onClick={() => sessionStorage.setItem("utm_content", content)}
    >
      {name}
    </NavHashLink>
  );
};

export default ContactRedirectBtn;
