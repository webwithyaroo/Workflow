export const BintalSection = () => {
  return (
    <section className="bg-primary-300 min-h-screen  pt-20 relative max-sm:pl-4   max-md:pl-12 pr-4">
      <div className=" max-w-[900px] mx-auto  bint-grid max-sm:bint-grid2 gap-10 text-white pt-10">
        <div className="  bg-bint-bg p-10  ">
          <div className="flex items-center justify-start gap-x-5 mb-3">
            <span className="p-3 grid place-content-center max-w-fit bg-green-500">
              <img src="icon/Adjust.svg" alt="icon" className="w-6" />
            </span>
            <h1 className="text-balance md:text-xl font-semibold max-w-[400px] gradient_col2">
              CONTROLED COMPONENT LIBRARY
            </h1>
          </div>
          <p className="text-primary-250 md:text-xl text-pretty">
            Organize all your React component in a controlled Library .Easily
            Browse and Search your saved components
          </p>
        </div>
        <div className="bg-bint-bg  p-10  ">
          <div className="flex items-center justify-start gap-x-5 mb-3">
            <span className="p-3 bg- grid place-content-center max-w-fit bg-primary-100 ">
              <img src="icon/Recycling.svg" alt="icon" className="w-6" />
            </span>
            <h1 className="gradient_col2 md:text-xl font-semibold">
              REUSABLE COMPONENTS
            </h1>
          </div>
          <p className="text-primary-250 md:text-xl text-pretty">
            Create and edit your React component Directly within our intuitive
            Editor.Write JSX code with syntax highlighting
          </p>
        </div>
        <div className="bg-bint-bg p-10 ">
          <div className="flex items-center justify-start gap-x-5 mb-3">
            <span className="p-3 grid place-content-center max-w-fit red">
              <img src="icon/fork.svg" alt="icon" className="w-6" />
            </span>
            <h1 className="gradient_col2 md:text-xl font-semibold">
              EMBEDDED CODE BOX
            </h1>
          </div>
          <p className="text-primary-250 md:text-xl text-pretty">
            Organize and edit all your React component in our code box with
            instant preview
          </p>
        </div>
        <div className="  bg-bint-bg p-10 ">
          <div className="flex items-center justify-start gap-x-5 mb-3">
            <span className="p-3 grid place-content-center max-w-fit yellow">
              <img src="icon/SourceCode.svg" alt="icon" className="w-6" />
            </span>
            <h1 className="gradient_col2 md:text-xl font-semibold text-balance max-w-[400px]">
              VERSION CONTROL AND HISTORY
            </h1>
          </div>
          <p className="text-primary-250 md:text-xl ">
            Track changes and maintain different versions of your component
            .Revert the previous version if needed.
          </p>
        </div>
      </div>
      <div>
        <span className="absolute top-0 bottom-0 left-4 h-full max-sm:hidden">
          {/* <img src="images/stroke.svg" alt="line-gradient" /> */}
          <img
            src="images/lineGradient.svg"
            alt="line-gradient"
            className="w-[20px] h-full"
          />
        </span>
      </div>
    </section>
  );
};
