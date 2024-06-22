import { signInWithEmailAndPassword } from "firebase/auth";
import { User } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const hadlesubmit = async (e) => {
    e.prevenDefault();

    try {
      const username = await signInWithEmailAndPassword(auth, email, password);
      console.log(username);

      const user = userCredential.user;
      localStorage.setitem("token", user.accessToken);
      localStorage.setitem("user", JSON.stringify(User));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-2 border-stone-900">
      <h1>Login page...</h1>
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
          login
        </button>
      </form>
      <div>
        {" "}
        Need to signup? <Link to={"/singup"}> Create an account.</Link>
      </div>
    </div>
  );
}
