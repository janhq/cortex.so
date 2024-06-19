import { FaArrowRight } from "react-icons/fa6";
import ThemedImage from "@theme/ThemedImage";

const UniversalSection = () => {
  return (
    <div className="container">
      <div className="mt-32">
        <h2 className="text-4xl">Universal AI Engine</h2>
        <p className="text-black/60 dark:text-white/60 mb-2">
          Build once. Deploy everywhere.
        </p>
      </div>
      <div className="py-8 flex flex-col md:flex-row items-start gap-8">
        <div className="cardContainer">
          <div className="flex items-start gap-8 h-40">
            <div className="flex flex-col justify-between h-full w-1/2 flex-shrink-0">
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0 mb-0">
                    Multiple
                  </h3>
                </div>
                <div>
                  <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
                    Model Formats
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-[#111] dark:bg-neutral-100 flex rounded-full items-center justify-center">
                  <FaArrowRight
                    className="text-blue-300 dark:text-blue-600 -rotate-45"
                    size={20}
                  />
                </div>
                <p className="mb-0">View Model Hub</p>
              </div>
            </div>
            <div className="relative z-50 m-auto flex flex-col gap-2">
              <div className="rotate-6 z-20">
                <div className="cardContainer cardContainer__small !py-2 !px-6 !rounded-lg">
                  <span className="text-lg font-semibold">GGUF</span>
                </div>
              </div>
              <div className="-rotate-6">
                <div className="cardContainer cardContainer__small !py-2 !px-6 !rounded-lg">
                  <span className="text-lg font-semibold">ONNX</span>
                </div>
              </div>
              <div className="cardContainer cardContainer__small !py-2 !px-6 !rounded-lg">
                <span className="text-lg font-semibold">TensorRT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="flex items-start gap-8 h-40">
            <div className="flex flex-col justify-between h-full w-1/2 flex-shrink-0">
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0 mb-0">
                    Multiple
                  </h3>
                </div>
                <div>
                  <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
                    Devices
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-[#111] dark:bg-neutral-100 flex rounded-full items-center justify-center">
                  <FaArrowRight
                    className="text-blue-300 dark:text-blue-600 -rotate-45"
                    size={20}
                  />
                </div>
                <p className="mb-0">Learn more</p>
              </div>
            </div>
            <div className="relative z-50 m-auto flex flex-col gap-2">
              <ThemedImage
                width={200}
                alt="Illustration Multi device"
                sources={{
                  light: "/img/homepage/multi-device.svg",
                  dark: "/img/homepage/multi-device.svg",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalSection;
