"use client";
import React, { useState } from "react";
import { Eye } from "lucide-react";
import Image from "next/image";
import UserInfo from "./UserInfo";
import "../app/globals.css";
import SignInBtn from "./SignInBtn";

const SignInModal = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-pink-100 flex items-center justify-start p-4">
      <div className="sign-in-container bg-white rounded-3xl p-8 w-full max-w-md relative shadow-lg">
        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-sm text-gray-600">Welcome to ""</h2>
            <h1 className="text-4xl font-semibold text-rose-800 mt-2">
              Sign in
            </h1>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Enter your username or email address
              </label>
              <input
                type="text"
                placeholder="Username or email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Enter your Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-rose-600 text-sm hover:underline">
                Forgot Password
              </a>
            </div>

            <button className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
              Sign in
            </button>
          </div>

          {/* Social Sign In */}
          <div className="space-y-3">
            {/* <button className="w-full bg-pink-100 text-gray-600 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-pink-200 transition-colors">
              <Image
                src="/google.svg"
                alt="Google"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button> */}
            <SignInBtn />

            <div className="flex space-x-2">
              <button className="flex-1 bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition-colors">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="mx-auto w-5 h-5"
                />
              </button>
              <button className="flex-1 bg-gray-300 text-white py-3 rounded-lg hover:bg-gray-400 transition-colors">
                <Image
                  src="/apple.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                  className="mx-auto w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center space-x-1">
            <span className="text-gray-600">No Account ?</span>
            <a href="#" className="text-green-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="right-image-container">
          <div className="relative w-full h-auto">
            <Image
              src="/frog.png"
              alt="Right-side image"
              width={900}
              height={900}
              objectFit="contain"
            />
          </div>
        </div>

        {/* Clownfish Left */}
        <div className="clownfish-container">
          <div className="relative w-full h-auto">
            <Image
              src="/clownfish.png"
              alt="Decorative fish"
              width={200}
              height={200}
              className="animate-swim"
            />
          </div>
        </div>
        {/* Clownfish Left 2 */}
        <div className="clownfish-container-2">
          <div className="relative w-full h-auto">
            <Image
              src="/clownfish.png"
              alt="Decorative fish"
              width={100}
              height={100}
              className="animate-swim"
            />
          </div>
        </div>
        {/* Clownfish Right */}
        <div className="clownfish-container-3">
          <div className="relative w-full h-auto">
            <Image
              src="/clownfish.png"
              alt="Decorative fish"
              width={200}
              height={200}
              className="flipped-vertically"
            />
          </div>
        </div>
        {/* Airplane */}
        <div className="container">
          <div className="airplane">
            <Image
              src="/airplane.png"
              alt="Airplane"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* Airplane 2 */}
        <div className="container">
          <div className="airplane-2">
            <Image
              src="/airplane.png"
              alt="Airplane"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* Airplane 3 */}
        <div className="container">
          <div className="airplane-3">
            <Image
              src="/airplane.png"
              alt="Airplane"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
