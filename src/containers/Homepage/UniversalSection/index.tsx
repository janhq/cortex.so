import Link from "@docusaurus/Link";
import { FaArrowRight } from "react-icons/fa6";
import ThemedImage from "@theme/ThemedImage";

const UniversalSection = () => {
  return (
    <div className="container">
      <div className="mt-32">
        <h2 className="text-4xl font-grotesk">Universal AI Engine</h2>
        <p className="text-black/60 dark:text-white/60 mb-2">
          Build your project once. Run it everywhere.
        </p>
      </div>
      <div className="py-8 flex flex-col md:flex-row items-start gap-8">
        <div className="cardContainer">
          <div className="flex items-start gap-8 h-56">
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
                <div className="mt-0">
                  <p className="mb-0 text-black/60 dark:text-white/60">
                    GGUF, ONNX, TensorRT
                  </p>
                </div>
              </div>
              <Link href="/docs" className="!no-underline">
                <div className="flex items-center mt-8 gap-x-2 cursor-pointer">
                  <div className="w-8 h-8 dark:bg-neutral-800 bg-neutral-100 flex rounded-full items-center justify-center">
                    <FaArrowRight
                      className="text-blue-300 -rotate-45"
                      size={20}
                    />
                  </div>
                  <p className="mb-0 text-neutral-800 font-medium dark:text-white">
                    Learn more
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative z-50 m-auto flex flex-col gap-2">
              <ThemedImage
                width={180}
                alt="Illustration Multi device"
                sources={{
                  light: "/img/homepage/multi-model.svg",
                  dark: "/img/homepage/multi-model.svg",
                }}
              />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="flex items-start gap-8 h-56">
            <div className="flex flex-col justify-between h-full w-1/2 flex-shrink-0">
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="bg-blue-300 text-black inline-block px-2 py-1 rounded-lg flex-shrink-0">
                    Cross-platform
                  </h3>
                </div>
                <div className="mt-0">
                  <p className="mb-0 text-black/60 dark:text-white/60">
                    Hailo, neuchip, quadric, laptop CPUs, laptop GPUs, mobile
                    phone, NPUs, industrial PCs, edge devices,...
                  </p>
                </div>
              </div>
              <Link href="/docs" className="!no-underline">
                <div className="flex items-center mt-8 gap-x-2 cursor-pointer">
                  <div className="w-8 h-8 dark:bg-neutral-800 bg-neutral-100 flex rounded-full items-center justify-center">
                    <FaArrowRight
                      className="text-blue-300 -rotate-45"
                      size={20}
                    />
                  </div>
                  <p className="mb-0 text-neutral-800 font-medium dark:text-white">
                    Learn more
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative z-50 m-auto flex flex-col gap-2">
              <ThemedImage
                width={240}
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
