import React from "react";
import Image from "next/image";
import Link from "next/link";
function Homepage() {
  return (
    <section
      className="flex flex-col
      px-[5vw] 
      lg:px-[15vw]
      lg:min-h-[90vh]  pt-12
      gap-y-4
      animate-fade-in
     "
    >
      {/* Hero Text*/}
      <div className="flex flex-col lg:flex-row h-2/3  justify-center gap-y-2 lg-gap-y-0 ">
        <h1 className="text-3xl lg:text-6xl lg:w-4/6">
          Learning is a journey. Learn together with me.
          <br></br>Rise & Grind.
        </h1>
        {/* Login modal */}
        <button className="inline-block text-xl lg:text-4xl mt-auto w-fit h-fit bg-black text-white rounded-xl p-2 lg:p-3">
          Get Started
        </button>
      </div>

      {/* image boxes */}
      <div className=" flex flex-col lg:flex-row justify-center items-center gap-y-2 lg:gap-x-2 lg:pt-10">
        <Link href="/leetcode">
          
            <img src="https://placehold.co/600x400"></img>
         
        </Link>
        <Link href="/career">
        
            <img src="https://placehold.co/600x400"></img>
         
        </Link>
      </div>
      <div></div>
    </section>
  );
}

export default Homepage;
