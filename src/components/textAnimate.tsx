"use client";
import { motion, useAnimate, stagger } from "framer-motion";

interface TextProps {
  text: string;
  IconUrl?: string;
}

export const TextAnimation = ({ text, IconUrl }: TextProps) => {
  const [scope, animate] = useAnimate();
  const characters = text.split(" ");

  const handleHover = () => {
    animate(
      scope.current.querySelectorAll(".letterchar"),
      { y: -32 },
      { duration: 0.1, delay: stagger(0.02) }
    );
  };

  const handleMouseLeave = () => {
    animate(
      scope.current.querySelectorAll(".letterchar"),
      { y: 0 },
      { duration: 0.1, delay: stagger(0.02) }
    );
  };

  return (
    <div
      ref={scope}
      className="relative flex items-center justify-center"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {IconUrl && <img src={IconUrl} alt="img" className="w-6" />}
      {characters.map((char, charIndex) => (
        <motion.div
          key={charIndex} // Unique key for each span
          className="flex items-center justify-center h-full overflow-hidden mr-[1px]"
        >
          {char.split("").map((letter, letterIndex) => (
            <motion.div
              key={letterIndex} // Unique key for each letter span
              data-letter={letter}
              className="letterchar flex items-center justify-center  relative  h-8 "
              initial={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {letter}
              <span className="absolute top-full flex items-center justify-center h-full left-0 cursor-pointer text-white ">
                {letter}
              </span>
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
