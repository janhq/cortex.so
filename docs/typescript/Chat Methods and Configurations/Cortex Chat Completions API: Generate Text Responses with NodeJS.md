
  
  # **Cortex Chat Completions API**

## High Level

The `create` method is a function exported from the `cortex.chat` module of the `@janhq/cortexso-node` SDK, which is a NodeJS client library for interacting with the Cortex API. This particular function allows you to generate completions (text responses) based on a given prompt, using the Cortex Chat Completions API.

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key_here",
});
```

## Why should I use this function?

The `create` method provides a convenient way to leverage the power of the Cortex Chat Completions API from within your NodeJS application. This API can be used for various natural language processing tasks, such as:

- Generating human-like responses to text prompts
- Answering questions based on provided context
- Summarizing long texts or documents
- Translating text from one language to another
- And more!

By using this method, you can easily integrate these capabilities into your application without having to manage the low-level details of making API requests and handling responses.

## What are the required parameters?

The `create` method takes the following parameters:

1. `body` (required): An object of type `ChatCompletionCreateParamsNonStreaming`, which contains the input prompt and other configurations for the request.
2. `options` (optional): An object of type `Core.RequestOptions`, which allows you to specify additional options for the API request, such as headers or query parameters.

## Prerequisites

Before using the `create` method, you need to have the following:

1. An instance of the `Cortex` class, which is initialized with your API key and the base URL of the Cortex API.
2. An understanding of the `ChatCompletionCreateParamsNonStreaming` object structure, which defines the input prompt and other configurations for the request.

## How do I use this function?

Here's an example of how you can use the `create` method to generate a completion based on a given prompt:

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key_here",
});

const prompt = "Write a short story about a brave knight on a quest.";

const params = {
  prompt,
  max_tokens: 200, // Maximum number of tokens in the generated completion
  temperature: 0.7, // Controls the randomness of the generated completion
  // Add other configuration options as needed
};

cortex.chat.create(params)
  .then((response) => {
    console.log(response.data.choices[0].text);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

In this example, we first create an instance of the `Cortex` class with our API key and the base URL of the Cortex API. We then define the input prompt and other configurations (such as `max_tokens` and `temperature`) in the `params` object.

Finally, we call the `create` method with the `params` object, and handle the response by logging the generated completion text to the console.

By following this pattern, you can easily integrate the Cortex Chat Completions API into your NodeJS application and leverage its powerful natural language processing capabilities.
  
  