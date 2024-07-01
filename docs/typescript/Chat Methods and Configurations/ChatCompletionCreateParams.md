
  
  # **ChatCompletionCreateParams**

**High Level**

`ChatCompletionCreateParams` is a type exported from the Cortex Node.js SDK, specifically from the `cortex.chat` module. It represents the parameters required for creating a chat completion using the Cortex API. This type is likely derived from another popular SDK but should be referred to as part of the Cortex SDK.

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "",
});
```

**Why should I use this type?**

The `ChatCompletionCreateParams` type ensures that the correct parameters are provided when creating a chat completion using the Cortex API. It helps to maintain type safety and prevents runtime errors caused by passing incorrect parameter types.

**What are the parameters or arguments required?**

The `ChatCompletionCreateParams` type is a union type that can be either `ChatCompletionCreateParamsNonStreaming` or `ChatCompletionCreateParamsStreaming`. These types likely define the specific parameters required for creating a non-streaming or streaming chat completion, respectively.

**Prerequisites**

Before using the `ChatCompletionCreateParams` type, you should have:

1. Installed the Cortex Node.js SDK (`@janhq/cortexso-node`).
2. Imported the necessary modules from the SDK.
3. Created an instance of the `Cortex` class with the appropriate configuration (e.g., `baseURL` and `apiKey`).

**How do I use this type?**

To use the `ChatCompletionCreateParams` type, you would typically pass an object conforming to either `ChatCompletionCreateParamsNonStreaming` or `ChatCompletionCreateParamsStreaming` as an argument to a function that creates a chat completion. Here's an example:

```javascript
import Cortex, { ChatCompletionCreateParamsNonStreaming } from "@janhq/cortexso-node";

const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "",
});

const params: ChatCompletionCreateParamsNonStreaming = {
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: "Hello, how are you?" },
    ],
};

cortex.chat.createChatCompletion(params)
    .then((response) => {
        console.log(response.data.choices[0].message.content);
    })
    .catch((error) => {
        console.error(error);
    });
```

In this example, an object conforming to the `ChatCompletionCreateParamsNonStreaming` type is created and passed to the `createChatCompletion` method of the `cortex.chat` module. The response from the API is then handled accordingly.

By using the `ChatCompletionCreateParams` type, you ensure that the correct parameters are provided to the API, making your code more robust and easier to maintain.
  
  