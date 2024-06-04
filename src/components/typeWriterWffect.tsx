import { twMerge } from "tailwind-merge";
import { motion as m, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <m.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <m.span
                  initial={{}}
                  key={`char-${index}`}
                  className={twMerge(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </m.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </m.div>
    );
  };
  return (
    <div
      className={twMerge(
        "text-2xl lg:text-4xl font-bold text-center inline-flex",
        className
      )}
    >
      {renderWords()}
      <m.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={twMerge(
          "inline-block rounded-sm w-[4px] h-6 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></m.span>
    </div>
  );
};

export default TypewriterEffect;
