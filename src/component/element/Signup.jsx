import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container text-center text-white mt-5" id="sign">
      <div className="row">
        <div className="col-md-12">
          <h1>SignUp</h1>
          <p>Please fill all the form to ceate account!</p>
          <hr />
          <div className="col-md-12 my-3 text-center name" id="s">
            <input
              type="text"
              name="username"
              placeholder="First Name"
              required
              className="name"
            />
           
          </div>
          <div className="col-md-12 my-3 name" id="d">
            <input
              type="email"
              name="username"
              placeholder="Last Name"
              required
              className="name"
              id="wed"
            />
          </div>
          <div className="col-md-12 my-3 name" id="f">
            <input
              type="email"
              name="username"
              placeholder="Email"
              required
              className="name"
              id="wed"
            />
          </div>
          <div className="col-md-12 my-3 name" id="g">
            <input
              type="Password"
              name="username"
              placeholder="Password"
              required
              className="name"
              id="wed"
            />
          </div>
          <div className="col-md-12 my-3 name" id="h">
            <input
              type="Password"
              name="username"
              placeholder="Confrm Password"
              required
              className="name"
              id="wed"
            />
          </div>

          <button className="btn  btn btn-outline-warning btn-sm me-3 " defaultValue="Submit">
            {" "}
            Save
          </button>
          <Link to="/">login</Link>
        </div>
      </div>
    </div>
  );
}
