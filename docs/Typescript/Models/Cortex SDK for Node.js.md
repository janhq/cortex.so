
  
  # **Cortex SDK for Node.js**

**High Level**

The Cortex SDK for Node.js is a powerful library that provides a convenient way to interact with the Cortex API. It is a forked version of another popular SDK but tailored specifically for Cortex. The SDK is designed to simplify the process of making API requests and handling responses, allowing developers to focus on building their applications without worrying about the intricate details of the API communication.

The Cortex object is initialized as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

In this example, the `Cortex` class is imported from the `@janhq/cortexso-node` package, and a new instance of the `Cortex` object is created with the provided `baseURL` and `apiKey`.

## Why should I use this SDK?

Using the Cortex SDK for Node.js offers several benefits:

1. **Simplified API Communication**: The SDK abstracts away the complexities of making HTTP requests and handling responses, allowing developers to focus on writing application logic rather than dealing with low-level networking details.

2. **Consistent API Interface**: The SDK provides a consistent interface for interacting with various Cortex API resources, such as models, completions, and assistants, making it easier to develop and maintain applications that use multiple API endpoints.

3. **Type Safety**: The SDK is written in TypeScript, providing type safety and better tooling support, which can help catch potential issues during development and improve overall code quality.

4. **Utility Methods**: The SDK includes utility methods and helper functions that simplify common tasks, such as handling pagination, file uploads, and error handling, reducing the amount of boilerplate code required in your application.

5. **Documentation and Examples**: The SDK is well-documented, making it easier for developers to understand and use its features. Additionally, the SDK often includes code examples that demonstrate how to use various methods and classes effectively.

## Methods Overview and Code Examples

The Cortex SDK for Node.js provides several classes and methods for interacting with different Cortex API resources. Here are some examples of commonly used classes and methods:

### `cortex.models`

The `cortex.models` class is used for managing and interacting with Cortex models.

**Example: Listing Available Models**

```javascript
const models = await cortex.models.list();
console.log(models.data);
```

**Example: Retrieving Model Information**

```javascript
const modelId = "my-model-id";
const model = await cortex.models.retrieve(modelId);
console.log(model);
```

### `cortex.chat.completions`

The `cortex.chat.completions` class is used for generating text completions using the Cortex API.

**Example: Creating a Chat Completion**

```javascript
const completion = await cortex.chat.completions.create({
  model: "my-model-id",
  messages: [
    { role: "user", content: "Hello, how are you?" },
  ],
});
console.log(completion.data.choices[0].message.content);
```

### `cortex.beta.assistants`

The `cortex.beta.assistants` class is used for managing and interacting with Cortex assistants.

**Example: Creating an Assistant**

```javascript
const assistant = await cortex.beta.assistants.create({
  model: "my-model-id",
  instructions: "You are a helpful assistant.",
});
console.log(assistant);
```

**Example: Retrieving an Assistant**

```javascript
const assistantId = "my-assistant-id";
const assistant = await cortex.beta.assistants.retrieve(assistantId);
console.log(assistant);
```

### `cortex.beta.threads`

The `cortex.beta.threads` class is used for managing and interacting with Cortex threads and runs.

**Example: Creating a Thread and Running It**

```javascript
const thread = await cortex.beta.threads.createAndRun({
  assistant_id: "my-assistant-id",
  message: "Hello, how can I assist you today?",
});
console.log(thread);
```

**Example: Retrieving a Run**

```javascript
const threadId = "my-thread-id";
const runId = "my-run-id";
const run = await cortex.beta.threads.runs.retrieve(threadId, runId);
console.log(run);
```

These are just a few examples of the classes and methods available in the Cortex SDK for Node.js. The SDK provides extensive documentation and examples to help developers understand and utilize its various features effectively.

## What are the parameters or arguments required?

The parameters or arguments required for each method vary depending on the specific method being called and the functionality it provides. However, most methods in the Cortex SDK for Node.js follow a consistent pattern of accepting an object as the main argument, which contains the necessary parameters for the method.

For example, the `cortex.chat.completions.create` method accepts an object with properties such as `model`, `messages`, `temperature`, and `max_tokens`, which are used to configure the text completion request.

```javascript
const completion = await cortex.chat.completions.create({
  model: "my-model-id",
  messages: [
    { role: "user", content: "Hello, how are you?" },
  ],
  temperature: 0.7,
  max_tokens: 100,
});
```

Similarly, the `cortex.beta.assistants.create` method accepts an object with properties such as `model`, `instructions`, and `name`, which are used to create a new assistant.

```javascript
const assistant = await cortex.beta.assistants.create({
  model: "my-model-id",
  instructions: "You are a helpful assistant.",
  name: "My Assistant",
});
```

The SDK documentation typically provides detailed information about the required and optional parameters for each method, along with their expected data types and descriptions.

## Prerequisites

Before using the Cortex SDK for Node.js, ensure that you have the following prerequisites in place:

1. **Node.js and npm**: You need to have Node.js and npm (Node Package Manager) installed on your machine. You can download the latest version of Node.js from the official website: [https://nodejs.org/](https://nodejs.org/)

2. **Cortex API Key**: You will need a valid Cortex API key to authenticate your requests. You can obtain an API key by signing up for a Cortex account and creating a new API key in the Cortex dashboard.

3. **Cortex Base URL**: Depending on your use case, you may need to provide the base URL for the Cortex API. The base URL is typically provided when initializing the `Cortex` object.

## How do I use this SDK?

To use the Cortex SDK for Node.js, follow these steps:

1. **Install the SDK**: Install the Cortex SDK for Node.js using npm:

```
npm install @janhq/cortexso-node
```

2. **Import the SDK**: Import the `Cortex` class from the `@janhq/cortexso-node` package in your Node.js project:

```javascript
import Cortex from "@janhq/cortexso-node";
```

3. **Initialize the Cortex Object**: Create a new instance of the `Cortex` object with your API key and base URL (if required):

```javascript
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your-api-key",
});
```

4. **Use the SDK Methods**: Once you have initialized the `Cortex` object, you can start using the various methods and classes provided by the SDK. For example, to generate a text completion using the `cortex.chat.completions` class:

```javascript
const completion = await cortex.chat.completions.create({
  model: "my-model-id",
  messages: [
    { role: "user", content: "Hello, how are you?" },
  ],
});
console.log(completion.data.choices[0].message.content);
```

5. **Error Handling**: The SDK provides built-in error handling mechanisms. If an error occurs during an API request, the SDK will throw an exception with detailed information about the error. You can catch and handle these exceptions in your application code.

```javascript
try {
  const completion = await cortex.chat.completions.create({
    model: "my-model-id",
    messages: [
      { role: "user", content: "Hello, how are you?" },
    ],
  });
  console.log(completion.data.choices[0].message.content);
} catch (error) {
  console.error("An error occurred:", error);
}
```

6. **Documentation and Examples**: Refer to the SDK documentation and examples for more detailed information on the available classes, methods, and their usage. The documentation often includes code snippets and explanations to help you get started quickly.

By following these steps, you can effectively use the Cortex SDK for Node.js in your Node.js applications, streamlining the process of interacting with the Cortex API and building powerful applications.
  
  