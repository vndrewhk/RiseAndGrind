import { Checkbox } from "@mui/material";
import React from "react";

function DropdownItem(props) {
  let problem = props.problem;
  console.log("dropdown item");
  console.log(problem);
  return (
    // should use grid for this
    <div className="text-neutral-600 p-0 m-0">
      <section className="grid grid-flow-row grid-cols-6 lg:grid-cols-8 w-full justify-between items-stretch">
        <div className="border border-black col-span-1  flex justify-center items-center">
          <Checkbox></Checkbox>
        </div>
        <div className="border border-black border-l-0 col-span-3 lg:col-span-4  flex justify-center items-center">
          {/* link to problem */}
          <a href={problem.url}>{problem.name}</a>
        </div>
        <div className="border border-black border-l-0 col-span-1 lg:col-span-2 flex justify-center items-center">
          <p>{problem.difficulty}</p>
        </div>
        <div className="border border-black border-l-0 col-span-1 flex justify-center items-center">
          <a href={problem.solution}>Solution</a>
        </div>
      </section>
    </div>
  );
}

function DropdownRow(props) {
  let items = props.problemSet.problems;
  console.log("row");
  console.log(items);

  let problemList = items.map((problem) => {
    console.log(problem);
    return <DropdownItem problem={problem}></DropdownItem>;
  });

  return <div className="text-neutral-600  p-0 m-0">{problemList}</div>;
}

function DropdownTab(props) {
  console.log("dropdown tab");
  console.log(props);
  return (
    <div class="text-sm lg:text-base">
      <details class="group">
        <summary class="bg-black text-white p-2 select-none flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{props.problemSet.problemType}</span>
          <span class="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>

        <DropdownRow problemSet={props.problemSet}></DropdownRow>
      </details>
    </div>
  );
}

export default DropdownTab;
