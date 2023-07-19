import React from "react";

function LeetcodeHome() {
  return (
    <section
      className="flex flex-col
      min-w-full
  px-[5vw] 
  lg:px-[15vw]
  lg:min-h-[110vh] bg-green-300 pt-12"
    >
      <div className="justify-center">
        <p className="font-semibold w-fit border-2 border-black p-2 mr-2 ">LeetCode</p>
      </div>
      <div className="flex flex-col h-2/3  justify-center space-y-4 lg:space-y-10 lg-gap-y-0">
        <h1 className="text-4xl lg:text-6xl lg:w-4/6">
          We've all gotta do it.
          <br></br>Rise & Grind.
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-16">
          <div className="space-y-4 lg:space-y-8">
            <p className="text-xl leading-5 lg:leading-6">
            With personalized tracking and expert guidance, master the art of problem-solving and level up your coding skills like never before.
            </p>
            <button className="inline-block text-xl lg:text-4xl mt-auto w-fit h-fit bg-black text-white rounded-xl p-2 lg:p-3">
              {/* <button className="inline-block text-3xl lg:text-5xl  lg:h-16 mt-auto w-fit bg-black text-white rounded-xl"> */}
              LeetCode Guides
            </button>
          </div>
          <img src="https://placehold.co/600x400"></img>
        </div>
      </div>
    </section>
  );
}

export default LeetcodeHome;
