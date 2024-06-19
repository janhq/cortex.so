import { FaArrowRight } from "react-icons/fa6";

const OAIReplacement = () => {
  return (
    <div className="container text-center">
      <div className="mt-20">
        <h2 className="text-4xl">
          Full replacement for{" "}
          <span className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
            {`OpenAI’s Platform`}
          </span>
        </h2>
        <p className="text-black/60 dark:text-white/60 mb-2 w-full lg:w-1/2 mx-auto">
          Cortex has an OpenAI equivalent API. Own your entire stack, and deploy
          your own openai equivalent backend in just a few minutes.
        </p>
        <div className="flex items-center justify-center mt-4 gap-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#111] dark:bg-neutral-100 flex rounded-full items-center justify-center">
            <FaArrowRight
              className="text-blue-300 dark:text-blue-600 -rotate-45"
              size={20}
            />
          </div>
          <p className="mb-0">View Docs</p>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-start gap-8 text-left mt-4">
          <div className="cardContainer">
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              perspiciatis suscipit ut placeat. Blanditiis dicta quisquam
              consequuntur nobis soluta omnis, fuga illum, nostrum deleniti
              aperiam quam, numquam beatae recusandae. Debitis.
            </p>
          </div>
          <div className="cardContainer">
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              perspiciatis suscipit ut placeat. Blanditiis dicta quisquam
              consequuntur nobis soluta omnis, fuga illum, nostrum deleniti
              aperiam quam, numquam beatae recusandae. Debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OAIReplacement;
