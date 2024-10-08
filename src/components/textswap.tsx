"use client";
import { motion, useAnimate, stagger } from "framer-motion";
import { useState } from "react";

interface TextProps {
  text: string;
  // onHover: (isHovered: boolean) => void; // Callback for hover state
  className?: string;
}

export const Textswap = ({ text, className }: TextProps) => {
  const [scope, animate] = useAnimate();
  const characters = text.split(" ");

  const handleHover = () => {
    animate(
      scope.current.querySelectorAll(".letterchar"),
      { y: -80 },
      { duration: 0.2, delay: stagger(0.02) }
    );
  };

  const handleMouseLeave = () => {
    animate(
      scope.current.querySelectorAll(".letterchar"),
      { y: 0 },
      { duration: 0.2, delay: stagger(0.02) }
    );
  };

  return (
    <div
      ref={scope}
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {characters.map((char, charIndex) => (
        <motion.span
          key={charIndex} // Unique key for each span
          className="inline-block h-20 overflow-hidden mr-2"
        >
          {char.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex} // Unique key for each letter span
              data-letter={letter}
              className="letterchar inline-block relative  h-20"
              initial={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {letter}
              <motion.span
                className="absolute top-full left-0 cursor-pointer text-primary-150 "
                initial={{ opacity: 0.5, scale: 1 }}
                whileHover={{
                  scale: 0.5,

                  opacity: 1,
                  translateY: -20,
                  rotateZ: 40,
                  transition: {
                    type: "spring",
                    stiffness: 900,
                    damping: 20,
                    duration: 1,
                  },
                }}
                transition={{ opacity: { duration: 0.2 } }}
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};
