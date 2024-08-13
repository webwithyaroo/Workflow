"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Textswap } from "@/src/components";
import { FaArrowRightLong } from "react-icons/fa6";

// Define the fade-in, exit, and hidden animation variants
const fadeVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 20 }, // Exit animation
};

export const FeatureSection = () => {
  const [clicked, setIsClicked] = useState<boolean | number>();

  const handleClicked = (target: number) => {
    setIsClicked((el) => (el === target ? false : target));
  };

  return (
    <section className="bg-primary-300 pt-40 pb-10 relative">
      <img
        src="images/customArrow.svg"
        alt="Arrow decoration"
        className="absolute top-0 w-20 right-0"
      />
      <div className="lg:text-7xl font-bold heroText text-white text-start px-8">
        <div className="pt-10 max-sm:pt-5 border-b-2 border-primary-200 relative">
          <div
            className="flex justify-between group  cursor-pointer text-primary-150  "
            onClick={() => handleClicked(1)}
          >
            <Textswap text={"DASHBOARD"} />
            <FaArrowRightLong
              className={` ${
                clicked === 1
                  ? "hidden"
                  : " text-primary-250 cursor-pointer duration-500 group-hover:-rotate-2 -rotate-45 group-hover:translate-x-[200%] "
              }`}
            />
          </div>
          <AnimatePresence mode="wait">
            {clicked === 1 && (
              <motion.p
                className="lg:pt-5 pb-5 text-xl font-normal text-primary-250 max-w-[920px]"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                Welcome to our intuitive Dashboard, offering a clear overview of
                key metrics and performance indicators, helping you stay on top
                of your business or application at a glance.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="pt-10 max-sm:pt-5 border-b-2 border-primary-200 ">
          <div
            className="flex justify-between group  cursor-pointer  "
            onClick={() => handleClicked(2)}
          >
            <Textswap text={"COMPONENTS"} />
            <FaArrowRightLong
              className={` ${
                clicked === 2
                  ? "hidden"
                  : " text-primary-250 cursor-pointer duration-500 group-hover:-rotate-2 -rotate-45 group-hover:translate-x-[200%] "
              }`}
            />
          </div>
          <AnimatePresence mode="wait">
            {clicked === 2 && (
              <motion.p
                className=" lg:pt-5 pb-5 text-xl font-normal text-primary-250 max-w-[900px]"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                Explore the various components available in our library. From
                buttons to forms, we provide customizable and reusable
                components to enhance your development process.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="pt-10 max-sm:pt-5 border-b-2 border-primary-200 relative ">
          <div
            className="flex justify-between cursor-pointer overflow-hidden group"
            onClick={() => handleClicked(3)}
          >
            <Textswap text={"VERSION CONTROL"} />
            <FaArrowRightLong
              className={` ${
                clicked === 3
                  ? "hidden"
                  : " text-primary-250 cursor-pointer duration-500 group-hover:-rotate-2 -rotate-45 group-hover:translate-x-[200%] "
              }`}
            />
          </div>
          <AnimatePresence mode="wait">
            {clicked === 3 && (
              <motion.p
                className=" lg:pt-5 pb-5 text-xl font-normal text-primary-250 max-w-[900px]"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                Manage your project’s versions seamlessly with our integrated
                version control features. Keep track of changes and collaborate
                effectively with your team.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
