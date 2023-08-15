import React from "react";
import Link from "next/link";
function CareerHome() {
  return (
    <section
      className="flex flex-col
    min-w-full
px-[5vw] 
lg:px-[15vw]
lg:min-h-[105vh]
 bg-gradient-to-t from-yellow-200 from-[97%] to-green-300
 pt-12 pb-12 lg:pb-0"
    >
      <div className="justify-center">
        <p className="font-semibold w-fit outline outline-2 outline-black p-2 mr-2 -translate-x-2 lg:-translate-x-4">
          Career Development
        </p>
      </div>
      <div className="flex flex-col h-2/3  justify-center space-y-4 lg:space-y-10 pt-4">
        <h1 className="text-4xl lg:text-6xl lg:w-4/6">
          Looking to improve your skills?
          <br></br>Rise & Grind.
        </h1>
        <div className="flex flex-col lg:flex-row-reverse gap-x-16">
          <div className="space-y-4 lg:space-y-8 pb-4">
            <p className="text-xl  pb-4 leading-normal md:leading-6 ">
              From programming languages and algorithms to software engineering
              principles, unlock a world of knowledge and
              harness the skills to excel in any software development
              endeavor.
            </p>
            <Link href="/career" className="">
              <button className="hover:scale-105 duration-75 inline-block text-xl lg:text-4xl mt-auto w-fit h-fit bg-black text-white rounded-xl p-2 lg:p-3">
                Learn Skills
              </button>
            </Link>
          </div>
          <img src="https://placehold.co/600x400"></img>
        </div>
      </div>
    </section>
  );
}

export default CareerHome;
