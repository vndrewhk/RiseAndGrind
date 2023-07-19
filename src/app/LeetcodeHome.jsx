import Link from "next/link";
import React from "react";

function LeetcodeHome() {
  return (
    <section
      className="flex flex-col
      min-w-full
  px-[5vw] 
  lg:px-[15vw]
  lg:min-h-[105vh]
  bg-green-300

  pt-12 pb-12 lg:pb-0"
    >
      <div className="justify-center">
        <p className="font-semibold w-fit outline outline-2 outline-black p-2 mr-2 -translate-x-2 lg:-translate-x-4">
          LeetCode
        </p>
      </div>
      <div className="flex flex-col h-2/3  justify-center space-y-4 lg:space-y-10 pt-4">
        <h1 className="text-4xl lg:text-6xl lg:w-4/6">
          We've all gotta do it.
          <br></br>Rise & Grind.
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-16">
          <div className="space-y-4 lg:space-y-8 pb-4">
            <p className="text-xl leading-5 lg:leading-6 pb-4">
              With personalized tracking and expert guidance, master the art of
              problem-solving and level up your coding skills like never before.
            </p>
            <Link href="/leetcode">
              <button className="inline-block text-xl lg:text-4xl mt-auto w-fit h-fit bg-black text-white rounded-xl p-2 lg:p-3">
                LeetCode Guides
              </button>
            </Link>
          </div>
          <img src="https://placehold.co/600x400"></img>
        </div>
      </div>
    </section>
  );
}

export default LeetcodeHome;
