
  
  # **Cortex Chat Completions**

High Level

The `Completions` class is part of the Cortex Node.js SDK, specifically for the chat functionality. It provides methods to interact with the chat completion endpoints of the Cortex API. This class is a fork from another popular SDK, but it should be referred to as `cortex.chat.completions`.

The Cortex object is initialized as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

## Why should I use this class?

The `Completions` class provides a convenient way to interact with the chat completion endpoints of the Cortex API. It offers methods to run functions and tools with the chat completions, as well as create chat completion streams. This class abstracts away the low-level API details and provides a more user-friendly interface for working with chat completions.

## Methods Overview and Code Examples

### `runFunctions`

This method allows you to run custom functions with the chat completions endpoint. It can handle both standard and streaming function runner requests.

```javascript
const response = await cortex.chat.completions.runFunctions({
  // Function runner parameters
});

// or for streaming
const stream = await cortex.chat.completions.runFunctions({
  stream: true,
  // Streaming function runner parameters
});
```

### `runTools`

This method is a convenience helper for using tool calls with the chat completions endpoint. It automatically calls the provided JavaScript functions and sends their results back to the chat completions endpoint, looping as long as the model requests function calls.

```javascript
const response = await cortex.chat.completions.runTools({
  // Tool runner parameters
});

// or for streaming
const stream = await cortex.chat.completions.runTools({
  stream: true,
  // Streaming tool runner parameters
});
```

### `stream`

This method creates a chat completion stream.

```javascript
const stream = cortex.chat.completions.stream({
  // Chat completion stream parameters
});
```

## Parameters and Arguments

The parameters and arguments required for each method depend on the specific use case and the type of request being made (standard or streaming). Please refer to the official Cortex API documentation or the method signatures in the code for more details on the required parameters.

## Prerequisites

Before using the `Completions` class, you need to have the Cortex Node.js SDK installed and import it into your project. Additionally, you need to have a valid API key and the appropriate permissions to access the chat completion endpoints.

## How to use

1. Initialize the Cortex object with your API key and base URL.
2. Import the `Completions` class from the SDK.
3. Use the appropriate method (`runFunctions`, `runTools`, or `stream`) and provide the required parameters based on your use case.
4. Handle the response or stream as per your application's logic.

Please note that the provided code and documentation serve as a general guide, and it's always recommended to refer to the official Cortex API documentation for the most up-to-date information and examples.
  
  