import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../../redux/users/selectors";
import types from "../../../redux/types";

const init = { name: "", surname: "", desc: "" };

const EditUser = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const users = useSelector(getUsers);

  const [inputs, setInputs] = useState(init);

  useEffect(() => {
    if (users?.data?.length) {
      setInputs(users.data.find((user) => user.id === +userId) || init);
    }
  }, [users, userId]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: types.PUT_USER_START,
      payload: { id: userId, data: inputs },
    });
  };

  return (
    <form action="#" method="post" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="myName">
          Enter new Name
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
          Enter new Surname
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

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default EditUser;
