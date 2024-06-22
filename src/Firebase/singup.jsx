import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const hadlesubmit = async (e) => {
    e.prevenDefault();

    try {
      const username = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(username)

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-2 border-stone-900">
      <h1>signup page</h1>
      <form onSubmit={hadlesubmit} className="">
        <input
          type="email"
          placeholder="Your Email"
          className="border-2 border-stone-900"
          required
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Your password"
          className="border-2 border-stone-900"
          required
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <button type="submit" className="bg-stone-900 text-white">
          Sign Up
        </button>
      </form>
      <div>
        {" "}
        Need to Login ? <Link to={"/login"}> login </Link>
      </div>
    </div>
  );
}
