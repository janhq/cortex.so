
  
  # **CreateChatCompletionRequestMessage**

## High Level

The `CreateChatCompletionRequestMessage` is a type exported from the `cortex` Node.js SDK, specifically the `cortex.chat` module. It represents the structure of a message parameter that can be passed when creating a chat completion request. This type is likely derived from or inspired by another popular SDK, but it should be referred to as part of the `cortex` SDK.

```
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "",
});
```

## Why should I use this type?

The `CreateChatCompletionRequestMessage` type ensures type safety and consistency when working with chat completion requests in the `cortex` SDK. By adhering to this type, developers can ensure that they are providing the correct structure and properties for the message parameter, which can help prevent runtime errors and improve code maintainability.

## What are the required properties?

The `CreateChatCompletionRequestMessage` type is likely an interface or an object type that defines the required and optional properties for a chat completion message. Without the actual implementation code, it's difficult to determine the exact properties required. However, it's common for chat completion message types to include properties such as `role` (e.g., user or assistant), `content` (the actual text message), and possibly additional metadata or configuration options.

## Prerequisites

To use the `CreateChatCompletionRequestMessage` type, you'll need to have the `cortex` Node.js SDK installed in your project. You can install it using a package manager like npm or yarn:

```
npm install @janhq/cortexso-node
```

## How do I use this type?

You can use the `CreateChatCompletionRequestMessage` type when creating a chat completion request with the `cortex` SDK. Here's an example of how you might use it:

```typescript
import Cortex, { CreateChatCompletionRequestMessage } from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});

const userMessage: CreateChatCompletionRequestMessage = {
  role: "user",
  content: "Hello, how are you?",
};

const chatCompletion = await cortex.chat.createCompletion({
  messages: [userMessage],
  // Additional options...
});
```

In this example, we first import the `CreateChatCompletionRequestMessage` type from the `cortex` SDK. Then, we create an object `userMessage` that adheres to the `CreateChatCompletionRequestMessage` type, specifying the `role` as `"user"` and the `content` as `"Hello, how are you?"`. Finally, we pass this `userMessage` object as part of the `messages` array when calling the `createCompletion` method of the `cortex.chat` module.

By using the `CreateChatCompletionRequestMessage` type, the TypeScript compiler can catch any type errors or missing properties before runtime, ensuring that the message parameter is correctly structured for the chat completion request.
  
  