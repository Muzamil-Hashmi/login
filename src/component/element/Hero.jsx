import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
   

      <div className="container   mt-5" id="for">
        <div className="row">
          <h2>Login Form</h2>
          <div className="col-md-12 mt-4">
            {" "}
            <a className="btn  btn btn-outline-light btn-sm" href="#" role="button">
              Login
            </a>
            <Link className='btn  ms-4  btn-sm btn-outline-danger ' to="sig" role="button">Signup</Link>

          
          <div className="col-md-12 my-3 name mt-4" id="name">
           
            <input type="text" name="username" placeholder="User Name" required  className='name'/>
          </div>

          <div className="col-md-12  password ">
            <form action="">
              
              <input type="password" placeholder="Password" name="Pasword" required className='name'  />
              <div className="mt-4">
              <a href="">Forget_password</a>
              </div>
              <div className="div ms-5 mt-4">

              </div>


              
            </form>
          </div>
          <input className="btn btn-primary btn-sm" type="submit" defaultValue="Submit" />

        </div>
        </div>
      </div>
    
  );
}
