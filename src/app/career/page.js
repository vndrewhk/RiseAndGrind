"use client";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CardPanel from "./CardPanel";
import { useRef } from "react";
export default function Home() {
  const elementRef = useRef(null);

  const scrollToElement = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // homepage
  return (
    <main className="ml-auto mr-auto flex min-h-screen  max-w-[100vw]   flex-col items-center ">
      {/* home section */}

      {/* group of resources, odinproject, mdn, w3schools? */}
      <section
        className="flex flex-col
        min-h-[90vh]
      px-[5vw] 
      lg:px-[15vw]
      lg:min-h-[90vh]  pt-12 lg:pt-32
      gap-y-4
      animate-fade-in
    
     "
      >
        {/* Hero Text*/}
        <div className="flex flex-col lg:flex-row h-2/3 min-w-full justify-center items-center ">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-3xl lg:text-6xl lg:w-4/6">
              Here's a list of resources I've used throughout my career.
            </h1>
            <p>
              Over the years I've come across many tutorials, websites, and
              resources to learn and gain skills.
              <br></br>
              Here are the ones that I've found the most useful. I hope you find
              them helpful too.
            </p>
            <button
              className="inline-block mt-auto w-fit h-fit bg-black text-white rounded-full p-2 lg:p-3 cursor-pointer hover:scale-110 duration-75 animate-bounce"
              onClick={scrollToElement}
            >
              <ArrowDownwardIcon></ArrowDownwardIcon>
            </button>
          </div>

          {/* button to point down */}
        </div>

        {/* image boxes */}

        <div></div>
      </section>

      <section
        className="flex flex-col
      min-w-full
  px-[5vw] 
  lg:px-[15vw]
  lg:min-h-[105vh]
  bg-green-300
   pb-12 "
        ref={elementRef}
      >
        <CardPanel></CardPanel>
        {/* <div className="justify-center">
          <p className="font-semibold w-fit outline outline-2 outline-black p-2 mr-2 -translate-x-2 lg:-translate-x-4">
            LeetCode
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-flow-row gap-8 lg:gap-16 auto-rows-fr grid-cols-1 lg:grid-cols-2 mt-auto">
            <ImgMediaCard
              image="https://placehold.co/600x400/EEE/31343C"
              title="The Odin Project"
              description="Here's a list of resources I've used throughout my career."
            ></ImgMediaCard>
            <ImgMediaCard
              image="https://placehold.co/600x400/EEE/31343C"
              title="The Odin Project"
              description="Here's a list of resources I've used throughout my career. Here's a list of resources I've used throughout my career.Here's a list of resources I've used throughout my career."
            ></ImgMediaCard>{" "}
            <ImgMediaCard
              image="https://placehold.co/600x400/EEE/31343C"
              title="The Odin Project"
              description="Here's a list of resources I've used throughout my career."
            ></ImgMediaCard>{" "}
            <ImgMediaCard
              image="https://placehold.co/600x400/EEE/31343C"
              title="The Odin Project"
              description="Here's a list of resources I've used throughout my career."
            ></ImgMediaCard>
          </div>
        </div> */}
      </section>
    </main>
  );
}
