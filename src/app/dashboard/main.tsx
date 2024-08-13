import { Button, TextAnimation } from "@/src/components";
import { FaCodeFork } from "react-icons/fa6";
export const Main = () => {
  return (
    <main className="custom-grid w-full m-3 ">
      <div className="grid1 bg-primary-300 rounded-md"></div>
      <div className="grid2 gap-y-3  bg-black grid grid-rows-10 rounded-md">
        <div className=" rounded-md  row-span-2 flex justify-between">
          <div className="text-white  ">
            <h1 className="text-xl">workflow</h1>
            <p className="text-primary-250">
              Utilized for building interactive UI components.
            </p>
          </div>
          <div>
            <Button className="bg-primary-100 ring-2 last: ring-primary-150  text-white py-[2px] px-3 rounded-[2px]  max-sm:text-xs flex items-center justify-center gap-x-3">
              <FaCodeFork className="rotate-90" size={20} />
              <TextAnimation text={" Flow  View"} />
            </Button>
          </div>
        </div>
        <div className="row-span-8 rounded-md bg-primary-300 relative "></div>
      </div>
      <div className="grid3 bg-primary-300  rounded-md "></div>
      <div className="grid4 bg-primary-300  rounded-md"></div>
    </main>
  );
};
