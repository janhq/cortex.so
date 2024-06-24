---
title: Overview
description: Cortex Overview.
slug: /
---

# Cortex

:::warning
🚧 Cortex is under construction.
:::

![Cortex Cover Image](/img/docs/cortex-cover.png)

Cortex is a fast, cross-platform AI engine. Developers can use Cortex to build LLM apps or run model operations on-device. Cortex has a Docker and Ollama inspired CLI, and it can be used as a server or imported as a library.

Cortex currently supports 3 inference engines:

- [Llama.cpp](https://github.com/ggerganov/llama.cpp)
- [ONNX Runtime](https://github.com/microsoft/onnxruntime)
- [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM)

:::info
**Real-world Use**: Cortex powers [Jan](https://jan.ai), our on-device ChatGPT-alternative.

Cortex has been battle-tested across 1 million+ downloads and handles a variety of hardware configurations.
:::

### Roadmap

Cortex aims to be compatible with [OpenAI API](https://platform.openai.com/docs/api-reference) ([see coverage tracker](./server)).

Our goal is to make it easy for developers to provide on-device AI and to build more secure applications, using a fully open-source stack.

### Architecture

Cortex's [architecture](./architecture.md) features a C++ inference core, with higher-order features in Typescript.

Our [long-term mission](https://jan.ai/about#mission) is to enable more on-device and robotics use cases.
