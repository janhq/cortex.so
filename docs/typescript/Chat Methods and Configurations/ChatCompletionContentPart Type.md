
  
  # **ChatCompletionContentPart**

**High Level**

`ChatCompletionContentPart` is a TypeScript type exported from the `cortex` Node.js SDK, specifically from the `cortex.chat` module. It is a union type that represents the different types of content that can be included in a chat completion response from the AI assistant.

```typescript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

**Why should I use this type?**

The `ChatCompletionContentPart` type should be used when working with chat completions in the `cortex` SDK. It ensures type safety and clarity when handling the different types of content that can be returned by the AI assistant. By using this type, you can more easily work with and process the response data.

**What is the structure?**

`ChatCompletionContentPart` is a union type that can be either `ChatCompletionContentPartText` or `ChatCompletionContentPartImage`. These types likely represent text and image content, respectively, but their specific structures are not provided in the given code snippet.

**Prerequisites**

To use this type, you need to have the `cortex` Node.js SDK installed and imported into your project.

**How do I use this type?**

The `ChatCompletionContentPart` type is primarily used as a type annotation or type parameter when working with chat completion responses from the `cortex` SDK. For example, you might have a function that processes chat completion responses, and you would use `ChatCompletionContentPart` to ensure type safety when handling the different types of content.

Here's an example of how you might use this type:

```typescript
import { ChatCompletionContentPart } from "@janhq/cortexso-node";

function processCompletionResponse(response: ChatCompletionContentPart[]) {
  for (const part of response) {
    if ("text" in part) {
      console.log("Text content:", part.text);
    } else {
      console.log("Image content:", part.imageUrl);
    }
  }
}
```

In this example, the `processCompletionResponse` function takes an array of `ChatCompletionContentPart` objects and processes each part accordingly, based on whether it is text or image content.

**Important Notes**

1. The specific structure of `ChatCompletionContentPartText` and `ChatCompletionContentPartImage` is not provided in the given code snippet, so you may need to refer to the SDK documentation or type definitions for more information.
2. Make sure to import the `ChatCompletionContentPart` type from the correct module or file within the `cortex` SDK.
3. Always refer to the official SDK documentation for the most up-to-date information and usage examples.
  
  