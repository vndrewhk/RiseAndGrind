
import LeetcodeTable from "./LeetcodeTable";

export default function Home() {
  // homepage
  return (
    <main className="ml-auto mr-auto max-w-[100vw] min-h-screen  flex flex-col ">
      {/* home section */}
      {/* leetcode */}
      <section>
        <LeetcodeTable></LeetcodeTable>
        {/* <Dropdown></Dropdown> */}
      </section>
    </main>
  );
}
