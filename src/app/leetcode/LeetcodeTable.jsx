"use client";
import { useEffect, useRef, useState } from "react";

const ProblemTypeRow = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { problemType, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;

    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  const handleOpenSize = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setAnswerH(`${answerElH + 20}px`);
  };
  console.log(problemType);

  return (
    <div className="space-y-3 mt-5 overflow-hidden border-b" key={idx}>
      <h4
        onClick={handleOpenAnswer}
        className="
        hover:bg-gray-200 pt-2 pl-2
        cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium"
      >
        {problemType.name}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        // this controls height of row
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          {problemType.problems.map((problem) => {
            console.log(problem);
            return (
              <ProblemRow
                problems={problem}
                handleOpenSize={handleOpenSize}
                key={problem.id}
              ></ProblemRow>
            );
          })}
          {/* <ProblemRow problem = {problem}/> */}
          {/* <p className="text-gray-500">text</p> */}
        </div>
      </div>
    </div>
  );
};

const ProblemRow = (props) => {
  // probably add default solution to this one

  const { problems, handleOpenSize, idx } = props;
  const [isOpen, setIsOpen] = useState(false);
  console.log(problems);

  const handleOpenSolution = () => {
    console.log("triggered");
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div onClick={handleOpenSolution}>{problems.name}</div>

      <div className={isOpen ? "visible" : "hidden"}>
        {problems.solutions.map((solutions) => {
          return (
            <SolutionRow
              solutions={solutions}
              key={solutions.userId}
              isOpen={isOpen}
              handleOpenSize={handleOpenSize}
            ></SolutionRow>
          );
        })}
      </div>
    </div>
  );
};

const SolutionRow = (props) => {
  const { solutions, isOpen, handleOpenSize, idx } = props;
  useEffect(() => {
    handleOpenSize();
  }, [isOpen]);

  return <div>{solutions.description}</div>;
};

export default () => {
  let solutions = [
    {
      name: "Arrays & Hashing",
      id: "asojdlik",
      problems: [
        {
          name: "Reverse a String",
          id: "diasop",
          order: 0,
          problemType: 1,
          difficulty: "Easy",
          solutions: [
            {
              user: "Andrew",
              userId: "2189eud1",
              description: "This is a solution",
              ytUrl: "https://www.google.ca",
              problem: "uw9q0dj",
            },
            {
              user: "Myles",
              userId: "321qeud1",
              description: "This is a 2nd solution",
              ytUrl: "https://www.bing.ca",
              problem: "dsakpqow",
            },
          ],
        },
      ],
    },
    {
      name: "Stacks and Queues",
      id: "asoidjk",
      problems: [
        {
          name: "Palindrome",
          id: "sajdiaow",
          order: 1,
          problemType: 1,
          difficulty: "Medium",
          solutions: [
            {
              user: "Andrew",
              userId: "2189eud1",
              description: "This is a palindrome solution",
              ytUrl: "https://www.google.ca",
              problem: "uw9q0dj",
            },
            {
              user: "Myles",
              userId: "321qeud1",
              description: "This is a 2nd palindrome solution",
              ytUrl: "https://www.bing.ca",
              problem: "dsakpqow",
            },
          ],
        },
      ],
    },
  ];
  solutions = solutions.sort();
  return (
    <section className="leading-relaxed  mt-12 mx-auto px-4 md:px-8 min-w-[75vw]">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-[75vw] mx-auto">
        {solutions.map((problemType, idx) => {
          return (
            <ProblemTypeRow
              key={problemType.id}
              problemType={problemType}
              idx={idx}
            ></ProblemTypeRow>
          );
        })}
        {/* {faqsList.map((item, idx) => (
          <ItemCard idx={idx} faqsList={item} />
        ))} */}
      </div>
    </section>
  );
};
