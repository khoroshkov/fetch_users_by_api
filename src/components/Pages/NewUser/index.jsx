import React, { useState } from "react";
import { useDispatch } from "react-redux";
import types from "../../../redux/types";

const init = { name: "", surname: "", desc: "" };

const NewUser = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(init);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCleareInputs = () => {
    setInputs(init);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: types.POST_USER_START,
      payload: inputs,
      callback: handleCleareInputs,
    });
  };

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="myName">
          Enter Your name
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            className="form-control"
            id="myName"
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="mySurname">
          Enter Your Surname
          <input
            type="text"
            name="surname"
            value={inputs.surname}
            onChange={handleChange}
            className="form-control"
            id="mySurname"
          />
        </label>
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="myDesc">
          Some text
          <input
            type="text"
            name="desc"
            value={inputs.desc}
            onChange={handleChange}
            id="myDesc"
            className="form-control"
          />
        </label>
      </div>
      <br />

      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
};

export default NewUser;
