import { Button } from "@/src/components";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <main className=" bg-primary-300 min-h-screen bg-center bg-cover  isolate bg-no-repeat  relative ">
      <div className="container lg:pt-40 pt-28 ">
        <div>
          <h1 className="text-white heroText xl:text-6xl font-bold text-center capitalize  max-w-[920px] mx-auto">
            the ultimate <span className="gradient_col">Solution</span> for
            component reusability
          </h1>
          <p className="max-w-[800px] max-sm:mt-5 xl:mt-6 text-center mx-auto lg:text-2xl text-primary-250">
            Maximize efficiency and Maintainability in your React apps with our
            approach to component design. Enhance Reusabilty and ensure a
            Consisitent user experience across projects.
          </p>
        </div>
        <Button className="flex items-center justify-center max-sm:mt-20 bg-primary-200 text-white gap-x-5 pl-2 py-2 rounded-[1px] pr-10 mx-auto mt-10 group ">
          <span className="p-4 flex items-center justify-center group-hover:rotate-[360deg] bg-primary-100 rounded-[1px] ring-1 ring-primary-150 transition-transform duration-1000 ease-in-out group-hover:translate-x-[140px]">
            <FaArrowRight className="text-white -rotate-90 group-hover:rotate-0 duration-1000" />
          </span>
          <p className="text-primary-250  hover:text-white group-hover:-translate-x-[40px]  transition-all duration-300 ease-in">
            Get started
          </p>
        </Button>
      </div>
      <span>
        <img
          src="icon/logo.svg"
          alt="logo"
          className="w-[90%] opacity-[0.02] fixed top-0 bottom-0 -z-[1]"
        />
      </span>
    </main>
  );
};
