---
title: cortex.llamacpp
description: cortex.llamacpp Architecture
slug: "cortex-llamacpp"
---

:::warning
🚧 Cortex is under construction.
:::
`cortex.llamacpp` is a C++ inference library that any server can load at runtime. It submodules (and occasionally upstreams) [llama.cpp](https://github.com/ggerganov/llama.cpp) for GGUF inference.

In addition to `llama.cpp`, `cortex.llamacpp` adds:

- OpenAI compatibility for the stateless endpoints.
- Model orchestration, like model warm-up and concurrent models.

:::info
`cortex.llamacpp` is formerly called "Nitro".
:::

This guide walks you through how to use `cortex.llamacpp` as a standalone library in any custom C++ server.

:::warning
`cortex.llamacpp` is bundled by default in our product, [Jan](https://jan.ai/docs) and [Cortex](/docs).
:::

## Usage

To include `cortex.llamacpp` in your own server implementation, follow the steps [here](https://github.com/janhq/cortex.llamacpp/tree/main/examples/server).

## Interface

`cortex.llamacpp` has the following Interfaces:

- **HandleChatCompletion:** Processes chat completion tasks
  ```cpp
  void HandleChatCompletion(
        std::shared_ptr<Json::Value> jsonBody,
        std::function<void(Json::Value&&, Json::Value&&)>&& callback);
  ```
- **HandleEmbedding:** Generates embeddings for the input data provided
  ```cpp
  void HandleEmbedding(
        std::shared_ptr<Json::Value> jsonBody,
        std::function<void(Json::Value&&, Json::Value&&)>&& callback);
  ```
- **LoadModel:** Loads a model based on the specifications
  ```cpp
  void LoadModel(
        std::shared_ptr<Json::Value> jsonBody,
        std::function<void(Json::Value&&, Json::Value&&)>&& callback);
  ```
- **UnloadModel:** Unloads a model as specified
  ```cpp
  void UnloadModel(
        std::shared_ptr<Json::Value> jsonBody,
        std::function<void(Json::Value&&, Json::Value&&)>&& callback);
  ```
- **GetModelStatus:** Retrieves the status of a model
  ```cpp
  void GetModelStatus(
        std::shared_ptr<Json::Value> jsonBody,
        std::function<void(Json::Value&&, Json::Value&&)>&& callback);
  ```

**Parameters:**

- **`jsonBody`** : The requested content in JSON format.
- **`callback`**: A function that handles the response.

## Architecture
![Cortex llamacpp architecture](/img/docs/llama-cpp1.png)

### Main Components
`cortex.llamacpp` is architected with several key components:

- **enginei**: An engine interface definition that extends to all engines, handling endpoint logic and facilitating communication between `cortex.cpp` and `llama engine`.
- **llama engine**: Exposes APIs for embedding and inference. It loads and unloads models and simplifies API calls to `llama.cpp`.
- **llama.cpp**: Submodule from the `llama.cpp` repository that provides the core functionality for embeddings and inferences.
- **llama server context**: A wrapper offers a more straightforward and user-friendly interface for `llama.cpp` APIs

### Communication Protocols
![Cortex llamacpp architecture](/img/docs/llama-cpp2.png)
The diagram above illustrates how `cortex.llamacpp` communication protocol works:

- `Streaming`: Responses are processed and returned one token at a time.
- `RESTful`: The response is processed as a whole. After the llama server context completes the entire process, a single result returns to `cortex.cpp`.

## Code Structure

```
.
├── base                              # Engine interface definition
|   └── cortex-common                 # Common interfaces used for all engines
|      └── enginei.h                  # Define abstract classes and interface methods for engines
├── examples                          # Server example to integrate engine
│   └── server.cc                     # Example server demonstrating engine integration
├── llama.cpp                         # Upstream llama.cpp repository
│   └── (files from upstream llama.cpp)
├── src                               # Source implementation for llama.cpp
│   ├── chat_completion_request.h     # OpenAI compatible request handling
│   ├── llama_client_slot             # Manage vector of slots for parallel processing
│   ├── llama_engine                  # Implementation of llamacpp engine for model loading and inference
│   ├── llama_server_context          # Context management for chat completion requests
│   │   ├── slot                      # Struct for slot management
│   │   └── llama_context             # Struct for llama context management
|   |   └── chat_completion           # Struct for chat completion management
|   |   └── embedding                 # Struct for embedding management
├── third-party                       # Dependencies of the cortex.llamacpp project
│   └── (list of third-party dependencies)
```

<!-- ## Runtime-->

## Roadmap

The future plans for `cortex.llamacpp` are focused on enhancing performance and expanding capabilities. Key areas of improvement include:

- **Performance Enhancements**: Optimizing speed and reducing memory usage to ensure efficient processing of tasks.
- **Multimodal Model Compatibility**: Expanding support to include a variety of multimodal models, enabling a broader range of applications and use cases.

:::info
To follow the latest developments of `cortex.llamacpp`, please see the [GitHub Repository](https://github.com/janhq/cortex.llamacpp).
:::
