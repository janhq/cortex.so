import { useState } from "react";

const levels = [
  {
    name: "OS",
    child: [
      {
        name: "Windows",
        value: "win",
      },
      {
        name: "Mac",
        value: "mac",
      },
      {
        name: "Linux",
        value: "linux",
      },
    ],
  },
  {
    name: "CPU",
    child: [
      {
        name: "Intel, AMD (x86)",
        value: "x86",
      },
      {
        name: "Arm64",
        value: "arm64",
      },
    ],
  },
  {
    name: "Accelerator",
    child: [
      {
        name: "Nvdia GPU",
        value: "nvdia",
      },
      {
        name: "AMD GPU",
        value: "amd",
      },
      {
        name: "Intel GPU",
        value: "intel",
      },
      {
        name: "Apple Metal",
        value: "apple",
      },
      {
        name: "Snapdragon NPU",
        value: "snapdragon",
      },
    ],
  },
  {
    name: "Engine",
    child: [
      {
        name: "ONNX Runtime",
        value: "onnx",
      },
      {
        name: "Llama.cpp",
        value: "llama",
      },
      {
        name: "TensorRT-LLM",
        value: "tensorRT-LLM",
      },
      {
        name: "CoreML",
        value: "coreML",
      },
    ],
  },
  {
    name: "Model Format",
    child: [
      {
        name: "ONNX",
        value: "onnx-model",
      },
      {
        name: "GGUF",
        value: "gguf",
      },
      {
        name: "TensorRT-LLM",
        value: "tensorRT-LLM",
      },
    ],
  },
];

const EngineCompability = () => {
  const [compability, setSompability] = useState({
    os: "",
    cpu: "",
    accelerator: "",
    engine: "",
    format: "",
  });

  console.log(compability);
  return (
    <div>
      {levels.map((level, i) => {
        return (
          <div key={i} className="flex justify-between items-center gap-4">
            <h5 className="mb-0">{level.name}</h5>
            <div className="flex w-3/4 gap-4">
              {level?.child.map((c) => {
                return (
                  <div className="bg-neutral-700 text-white p-4 my-2 rounded-lg">
                    {c.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EngineCompability;
