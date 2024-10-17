import React from "react";

function page() {
  return (
   <div className="flex justify-center items-center h-screen">
     <div className="space-y-10 bg-gray-200 p-5 rounded-lg w-[400px]">
      <h1 className="text-center font-bold text-3xl">Sign In</h1>
      <div className="w-full grid ">
        <input
          type="email"
          placeholder="Email"
          required
          className="border-b-2 border-gray-300 focus:border-[#202426] placeholder:text-[#202426] bg-transparent outline-none w-full h-12 p-2"
        />
        <input
          type="Password"
          placeholder="Password"
          required
          className="border-b-2 border-gray-300 focus:border-[#202426] placeholder:text-[#202426] bg-transparent outline-none w-full h-12 p-2"
        />
      </div>

      <div className="flex justify-center ">
        <button className=" bg-black text-white px-4 py-2 w-full">
          Sign In
        </button>
      </div>
    </div>
   </div>
  );
}

export default page;
