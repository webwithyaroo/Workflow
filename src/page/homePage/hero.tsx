import { Button, TextAnimation } from "@/src/components";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <main className=" bg-primary-300 min-h-screen bg-center bg-cover  isolate bg-no-repeat   ">
      <div className="container pt-48 max-sm:pt-40">
        <div>
          <h1 className="text-white heroText xl:text-6xl font-bold text-center capitalize max-w-[1010px] mx-auto">
            the ultimate <span className="gradient_col">Solution</span> for
            component reusability
          </h1>
          <p className="max-w-[800px] max-sm:mt-5 xl:mt-6 text-center mx-auto lg:text-2xl text-primary-250">
            Maximize efficiency and{" "}
            <span className="text-green-500">Maintainability </span> in your{" "}
            <span className="text-primary-100">React </span>apps with our
            approach to component design. Enhance{" "}
            <span className="text-red-400">Reusabilty </span> and ensure a
            <span> Consisitent </span> user experience across projects.
          </p>
        </div>
        <Button className="flex items-center justify-center max-sm:mt-20 bg-primary-200 text-white gap-x-5 pl-2 py-2 rounded-full pr-10 mx-auto mt-10 group ">
          <span className="p-4 flex items-center justify-center group-hover:rotate-[360deg] bg-primary-100 rounded-full transition-transform duration-1000 ease-in-out group-hover:translate-x-[140px]">
            <FaArrowRight className="text-white -rotate-90 group-hover:rotate-0 duration-1000" />
          </span>
          <p className="text-primary-250  hover:text-white group-hover:-translate-x-[30px]  transition-all duration-300 ease-in">
            Get started
          </p>
        </Button>
      </div>
      <span>
        <img
          src="images/stroke.svg"
          className="absolute bottom-0 right-10 opacity-5 -z-10"
        />
      </span>
      <span>
        <img
          src="images/bird.svg"
          className="absolute top-0 left-10 opacity-5 -z-10"
        />
      </span>
    </main>
  );
};
