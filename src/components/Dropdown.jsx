import React from "react";
import DropdownTab from "./DropdownTab";

function Dropdown() {
  // store all questions in one object
  //   let testItems = {
  //     arrays: {
  //       containsDuplicate: {
  //         solved: false,
  //         name: "Contains Duplicate",
  //         difficulty: "Easy",
  //         solution: "https://www.google.ca/",
  //         url: "https://www.bing.ca/",
  //       },
  //     },
  //   };

  let testItems = [
    {
      problemType: "Arrays & Hashing",
      problems: [
        {
          solved: false,
          name: "Contains Duplicate",
          difficulty: "Easy",
          solution: "https://www.google.ca/",
          url: "https://www.bing.ca/",
        },
        {
          solved: false,
          name: "Contains Duplicate 2",
          difficulty: "Easy",
          solution: "https://www.google.ca/",
          url: "https://www.bing.ca/",
        },
      ],
    },
    {
      problemType: "Arrays & Hashing",
      problems: [
        {
          solved: false,
          name: "Contains Duplicate",
          difficulty: "Easy",
          solution: "https://www.google.ca/",
          url: "https://www.bing.ca/",
        },
        {
          solved: false,
          name: "Contains Duplicate 2",
          difficulty: "Easy",
          solution: "https://www.google.ca/",
          url: "https://www.bing.ca/",
        },
      ],
    },
  ];

  return (
    <div>
      <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen min-w-[75vw] lg:min-w-[50vw] bg-red-200">
        <div class="flex flex-col items-center">
          <h2 class="font-bold text-5xl mt-5 tracking-tight border-b-2  border-black">
            Blind75 Questions
          </h2>
        </div>
        <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 min-w-full">
          {/* map this out from fetch */}
          {testItems.map((problemType) => {
            return <DropdownTab problemSet={problemType}></DropdownTab>;
          })}
          {/* <DropdownTab problemSet={testItems[0]}></DropdownTab> */}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
