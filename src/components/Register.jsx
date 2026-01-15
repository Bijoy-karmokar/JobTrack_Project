import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log({ name, email, photo, password, confirmPassword });
    setError("");
    if (password.length < 6) {
      setError("Password must be six character or larger");
      return;
    }
    // Number check
    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    // Special character check
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }
    if (password !== confirmPassword) {
      setError("password must be same confirm Password");
      return;
    }
	// lowercase
	if (!/[a-z]/.test(password)) {
	  setError("Password must contain at least one lowercase letter");
	  return;
	}
    // Uppercase check
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col max-w-md mx-auto my-6 p-6 rounded-md shadow bg-base-200 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register Now</h1>
        <p className="text-sm dark:text-gray-600">
          Register to access your account
        </p>
      </div>
      <form onSubmit={handleRegister} className="space-y-12">
        <div className="space-y-4">
          {/* name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {/* photo */}
          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              PhotoURL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your PhotoURL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {/* email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          {/* password */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          {/* confirmPassword */}
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="confirmPassword" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white"
            >
              Register
            </button>
          </div>
          {error && <small className="text-red-500">{error}</small>}
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Already have an account yet?
            <Link
              to="/login"
              className="hover:underline text-blue-500 underline-offset-2 dark:text-violet-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
