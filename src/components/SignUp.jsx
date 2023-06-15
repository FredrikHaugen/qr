import React from 'react';

function SignIn() {
  return (
    <div className="px-32 py-16 rounded-lg flex items-center justify-center">
      <form className="flex flex-col items-center w-4/5 mx-auto space-y-4">
        <input type="text" placeholder="Username" className="text-center py-2 px-4 w-full bg-white bg-opacity-20 rounded-md text-sm text-gray-800 placeholder-gray-800 outline-none" />
        <input type="email" placeholder="E-Mail" className="text-center py-2 px-4 w-full bg-white bg-opacity-20 rounded-md text-sm text-gray-800 placeholder-gray-800 outline-none" />
        <input type="password" placeholder="Password" className="text-center py-2 px-4 w-full bg-white bg-opacity-20 rounded-md text-sm text-gray-800 placeholder-gray-800 outline-none" />
        <input type="password" placeholder="Confirm Password" className="text-center py-2 px-4 w-full bg-white bg-opacity-20 rounded-md text-sm text-gray-800 placeholder-gray-800 outline-none" />
        <button type="submit" className="py-2 px-4 w-full text-gray-800 bg-green-500 rounded-md text-sm">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
