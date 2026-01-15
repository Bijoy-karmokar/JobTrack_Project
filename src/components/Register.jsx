import React from "react";
import { Link } from "react-router";

const Register = () => {
	const handleRegister=(e)=>{
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const photo = e.target.photo.value;
		const password = e.target.password.value;
		console.log({name,email,photo,password});
		
	}
  return (
<div className="flex flex-col max-w-md mx-auto my-6 p-6 rounded-md shadow bg-base-200 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Register Now</h1>
		<p className="text-sm dark:text-gray-600">Register to access your account</p>
	</div>
	<form onSubmit={handleRegister} className="space-y-12">
		<div className="space-y-4">
              {/* name */}
			<div>
				<label htmlFor="name" className="block mb-2 text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
            {/* photo */}
			<div>
				<label htmlFor="photo" className="block mb-2 text-sm">PhotoURL</label>
				<input type="text" name="photo" id="photo" placeholder="Enter your PhotoURL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
            {/* email */}
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
               {/* password */}
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
            {/* confirmPassword */}
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Confirm Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white">Register</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Already have an account yet?
				<Link to="/login" className="hover:underline text-blue-500 underline-offset-2 dark:text-violet-600">Login</Link>.
			</p>
		</div>
	</form>
</div>
  );
};

export default Register;
