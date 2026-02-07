"use client";

import { useState } from "react";

export default function Home() {
  const minChars = 20;
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "icloud.com",
    "zohomail.com",
    "protonmail.com",
    "gmx.com",
  ];

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    setEmailError("");
  }

  function validateEmailDomain(email) {
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return false;
    return !blockedDomains.includes(domain);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmailDomain(email)) {
      setEmailError("Business emails only.");
      return;
    }

    setSuccess(true);
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-[#ffffff] w-full max-w-md rounded-xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-black text-lg sm:text-2xl font-bold text-center">
            Internal Tool Access
          </h1>

          {success ? (
            <p className="mt-6 text-center text-green-600 text-lg font-medium">
              You have been added to the queue.
            </p>
          ) : (
            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
         
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={handleEmail}
                className={`w-full px-4 py-2 rounded-md outline-none border ${
                  emailError ? "border-red-500" : "border-black"
                } text-black bg-transparent`}
                required
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}

              <div className="w-full">
                <div className="relative w-full">
                  <textarea
                    placeholder="Why do you need access?"
                    rows={4}
                    value={message}
                    onChange={handleMessage}
                    className="w-full px-4 py-2 pr-16 pb-8 rounded-md outline-none text-black border resize-none bg-transparent"
                    required
                  />
              
                  <span className="absolute bottom-2 right-3 z-10 text-xs pointer-events-none bg-white px-1 rounded">
                    <span
                      className={
                        message.length < minChars
                          ? "text-red-500"
                          : "text-black"
                      }
                    >
                      {message.length}
                    </span>
                    / {minChars}
                  </span>
                </div>
           
                {message.length > 0 && message.length < minChars && (
                  <p className="mt-1 text-sm text-red-500">
                    Must be {minChars} characters or more.
                  </p>
                )}
              </div>

       
               {/* Submit Button */}
              <button
                type="submit"
                disabled={message.length < minChars}
                className="mt-2 w-full px-6 py-2 bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Request Access Token
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
