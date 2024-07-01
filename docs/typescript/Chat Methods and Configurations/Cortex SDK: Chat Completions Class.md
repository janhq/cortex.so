
  
  # **Completions**

High Level

The `Completions` class is part of the `cortex.chat` module in the Cortex Node.js SDK. It provides a method to create a model response for a given chat conversation. This class is forked from another popular SDK, but we'll refer to it as part of the Cortex SDK.

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "your_api_key_here",
  });
```

## Why should I use this function?

The `Completions` class allows you to generate responses from a language model based on a given chat conversation. This can be useful for building chatbots, virtual assistants, or any application that requires natural language processing and generation.

## What are the required parameters or arguments?

The `create` method of the `Completions` class accepts the following parameters:

1. `body` (required): An object containing the parameters for the chat completion request. This object can have different properties depending on whether you want to use streaming or non-streaming mode.

   - For non-streaming mode, the `body` object should have the following properties:
     - `model` (string): The ID of the language model to use for generating the response.
     - `messages` (array of objects): An array of objects representing the conversation history, where each object has a `role` property ('system', 'user', or 'assistant') and a `content` property (the actual message text).
     - `temperature` (number, optional): A value between 0 and 1 that controls the randomness of the generated response. Higher values make the output more random, while lower values make it more deterministic.
     - `max_tokens` (number, optional): The maximum number of tokens (words or word pieces) to generate in the response.
     - `top_p` (number, optional): Nucleus sampling parameter that controls the randomness of the generated response.
     - `n` (number, optional): Number of completions to generate for each prompt.
     - `stream` (boolean, optional): Set to `false` for non-streaming mode.

   - For streaming mode, the `body` object should have the following properties:
     - `model` (string): The ID of the language model to use for generating the response.
     - `messages` (array of objects): An array of objects representing the conversation history, where each object has a `role` property ('system', 'user', or 'assistant') and a `content` property (the actual message text).
     - `temperature` (number, optional): A value between 0 and 1 that controls the randomness of the generated response. Higher values make the output more random, while lower values make it more deterministic.
     - `max_tokens` (number, optional): The maximum number of tokens (words or word pieces) to generate in the response.
     - `top_p` (number, optional): Nucleus sampling parameter that controls the randomness of the generated response.
     - `n` (number, optional): Number of completions to generate for each prompt.
     - `stream` (boolean, optional): Set to `true` for streaming mode.

2. `options` (optional): An object containing additional options for the request, such as headers or timeout settings.

## Prerequisites

Before using the `Completions` class, make sure you have:

1. Installed the Cortex Node.js SDK by running `npm install @janhq/cortexso-node` or `yarn add @janhq/cortexso-node`.
2. Imported the Cortex SDK and created an instance with your API key and base URL.
3. Familiarized yourself with the language model you plan to use and its capabilities.

## How do I use this function?

Here's an example of how to use the `create` method of the `Completions` class in non-streaming mode:

```javascript
const response = await cortex.chat.completions.create({
  model: 'your_model_id',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the capital of France?' },
  ],
  temperature: 0.7,
  max_tokens: 100,
});

console.log(response.choices[0].message.content);
```

And here's an example of how to use it in streaming mode:

```javascript
const stream = await cortex.chat.completions.create(
  {
    model: 'your_model_id',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'What is the capital of France?' },
    ],
    temperature: 0.7,
    max_tokens: 100,
    stream: true,
  },
  { responseType: 'stream' }
);

stream.on('data', (chunk) => {
  console.log(chunk.toString());
});

stream.on('end', () => {
  console.log('Stream ended');
});
```

In the above examples, replace `'your_model_id'` with the actual ID of the language model you want to use. The `messages` array contains the conversation history, where the first object represents the system prompt (instructions or context for the model), and the second object represents the user's query or input.

The `temperature` parameter controls the randomness of the generated response, while `max_tokens` limits the maximum length of the response. Adjust these values based on your requirements.

In streaming mode, the `create` method returns a readable stream that emits `data` events with chunks of the generated response. You can listen to these events and process the data as needed. The `end` event is emitted when the stream has finished.
  
  