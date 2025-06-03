import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannar3 from '../assets/images/bannar3.png';
import { postWithoutToken } from "../api/fetch";
import { endPoint } from "../utli/url";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = {
        email,
        password,
      };

      const res = await postWithoutToken(endPoint.login, data);

      if (res?.accesstoken && res?.content) {
        localStorage.setItem("token", res.accesstoken);
        localStorage.setItem("user", JSON.stringify(res.content));
        localStorage.setItem("role", res.content.role); // Save role if needed elsewhere

        // Redirect based on backend role
        if (res.content.role === 'user') {
          window.location.href = "/";
        } else if (res.content.role === 'admin') {
          window.location.href = "/dashboard";
        } else {
          alert("Unknown role. Cannot redirect.");
        }
      } else {
        alert("Login failed. Please check your credentials.");
      }

    } catch (error) {
      console.error(error);
      alert("An error occurred during login.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      const user = JSON.parse(userData);
      if (user?.role === 'user') {
        window.location.href = "/";
      } else if (user?.role === 'admin') {
        window.location.href = "/dashboard";
      }
    }
  }, []);

  return (
    <div className="bg-slate-50 flex justify-center items-center min-h-screen">
      <div className="flex w-4/6 h-auto my-8 border rounded-2xl overflow-hidden shadow-lg">
        {/* Left Image */}
        <div className="w-2/4">
          <img src={bannar3} alt="login" className="w-full h-full object-cover" />
        </div>

        {/* Right Form */}
        <div className="w-2/4 p-10 flex flex-col justify-center items-center">
          <h1 className="text-pink-500 font-bold text-[1.8rem]">Sign In</h1>
          <p className="text-md text-gray-700 mb-6">Sign in to continue shopping</p>

          <form className="w-full" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-800 mb-1 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-pink-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label className="text-sm font-medium text-gray-800">
                  Password <span className="text-red-500">*</span>
                </label>
                <Link to="/ForgetPass" className="text-pink-400 text-xs">Forgot Password?</Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember Me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-full font-bold text-lg transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-5 text-sm">
            Don’t have an account?{' '}
            <Link to="/Signup" className="text-pink-400 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
