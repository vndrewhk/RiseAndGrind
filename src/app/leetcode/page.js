import LeetcodeHome from "../LeetcodeHome";
import CareerHome from "../CareerHome";
import Homepage from "../homepage";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  // homepage
  return (
    <main className="ml-auto mr-auto max-w-[100vw] min-h-screen  flex flex-col">
      {/* home section */}
      {/* leetcode */}
      <section>
        <Dropdown></Dropdown>
      </section>
    </main>
  );
}
