import React from "react";

function page() {
  return (
    <div className=" space-y-10 w-[600px] md:mx-[30%] md:my-52">
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

      <div className="flex justify-center">
        <button className=" bg-black text-white px-4 py-2">
         Sign In
        </button>
      </div>
    </div>
  );
}

export default page;
