import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Signup.module.css";
import { useState, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";

function Signup() {
  // const navigate = useNavigate();
  const [state, setState] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(
    () => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        let userList =
          JSON.parse(localStorage.getItem("registeredUserList")) || [];
        userList.push(formValues);
        localStorage.setItem("registeredUserList", JSON.stringify(userList));
        // navigate("../login/Login");
      }
    },
    [formErrors, isSubmit, formValues]
  );

  const validate = values => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    var spaceRegx = /\s/;
    if (spaceRegx.test(values.name)) {
      errors.name = "*username name wouldn't have whiteSpace";
    } else if (spaceRegx.test(values.email)) {
      errors.email = "*email wouldn't have whiteSpace";
    } else if (spaceRegx.test(values.password)) {
      errors.password = "*password wouldn't have whiteSpace";
    }

    if (!values.name) {
      errors.name = "*Username is required!";
    }

    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "*This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password.length < 8) {
      errors.password = "*Password must be more than 8 characters";
    } else if (values.password.length > 10) {
      errors.password = "*Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  const handelinput = e => {
    setState(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className={style.main}>
      <form className={style.form} style={{ gap: "1vh", position: "absolute" }}>
        <FaTwitter
          style={{ color: "white", fontSize: "40px", marginTop: "10px" }}
        />
        <h1>Create your account</h1>

        <input
          className={style.input1}
          placeholder="Name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          className={style.input1}
          placeholder="Email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          className={style.input1}
          placeholder="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <h5 className={style.heading}>Date of birth</h5>

        <p>
          This will not be shown publicly. Confirm your own age, even if this
          business, <br />a pet, or something else.
        </p>

        <div className={style.div}>
          <input
            placeholder="Month"
            className={style.inp1}
            onChange={handelinput}
          />
          <input
            placeholder="Day"
            className={style.inp2}
            onChange={handelinput}
          />
          <input
            placeholder="Year"
            className={style.inp3}
            onChange={handelinput}
          />
        </div>
        <p style={{ color: "red" }}>
          {formErrors.password}
        </p>
        <div className="btn">
          <button className={style.submit} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <br />
        <h4>
          Already have an account?<Link to={"/"}>
            <span style={{ color: "#2997f1" }}> Log in</span>{" "}
          </Link>
        </h4>
        <br />
      </form>
    </div>
  );
}

export default Signup;
