---
title: Cortex.cpp
description: Cortex.cpp Architecture
slug: "cortex-cpp"
---

:::warning
🚧 Cortex is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

Cortex.cpp is a stateless, C++ server that is 100% compatible with OpenAI API (stateless endpoints).

It includes a Drogon server, with request queues, model orchestration logic, and hardware telemetry, and more, for prod environments.

This guide walks you through how Cortex.CPP is designed, the codebase structure, and future plans.

## Usage

See [Quickstart](/docs/quickstart)

## Interface

## Architecture

## Code Structure

```md
├── app/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── services/
│ │ ├── ?engines/
│ │ │ ├── llama.cpp
│ │ │ ├── tensorrt-llm
│ │ │ └── ...
│ │ └── ...
│ ├── CMakeLists.txt
│ ├── config.json
│ ├── Dockerfile
│ ├── docker-compose.yml
│ ├── README.md
│ └── ...
```

`cortex-cpp` folder contains stateless implementations, most of which call into `cortex.llamacpp` and `cortex.tensorrt-llm`, depending on the engine at runtime.

Here you will find the implementations for stateless endpoints:

- `/chat/completion`
- `/audio`
- `/fine_tuning`
- `/embeddings`
- `/load_model`
- `/unload_model`

And core hardware and model management logic like CPU instruction set detection, and multiple model loading logic.

## Runtime

## Roadmap
