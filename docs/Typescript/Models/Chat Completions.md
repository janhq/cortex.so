
  
  # **ChatCompletions**

High Level

The `cortex.chat.completions` class provides methods to generate text completions using the powerful language models available in the Cortex API. This class is part of the `cortex.chat` namespace, which focuses on facilitating natural language interactions.

## Why should I use this function?

The `create` method allows you to generate human-like text based on a given prompt or instruction. This can be useful for a variety of applications, such as content generation, language translation, question answering, and more. By leveraging the advanced language models available in Cortex, you can obtain high-quality text outputs tailored to your specific needs.

## Methods Overview and Code Examples

```typescript
create(
  body: ChatCompletionCreateParamsNonStreaming,
  options?: Core.RequestOptions,
): APIPromise<ChatCompletion>;
```

The `create` method takes the following parameters:

- `body` (required): An object containing the parameters for the text completion request, such as the prompt, model, and other settings.
- `options` (optional): An object containing additional options for the request, such as headers and timeout.

Example usage:

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key",
});

const prompt = "Write a short story about a curious cat:";

const response = await cortex.chat.completions.create({
  model: "text-davinci-003",
  prompt: prompt,
  max_tokens: 200,
});

console.log(response.data.choices[0].text);
```

## What are the required parameters?

The `body` parameter is required and should be an object of type `ChatCompletionCreateParamsNonStreaming`. This object should contain the following properties:

- `model` (required): The ID of the language model to use for text completion.
- `prompt` (required): The text prompt or instruction for the language model to generate a completion.
- `max_tokens` (optional): The maximum number of tokens to generate in the completion.
- `temperature` (optional): A value that controls the randomness of the generated text (higher values produce more random outputs).
- `top_p` (optional): An alternative to sampling with temperature, which considers the logits of the tokens and selects from the top specified tokens.
- `n` (optional): The number of completions to generate for each prompt.
- `stream` (optional): Whether to stream the results back or not.
- `logprobs` (optional): Whether to include log probabilities on the logprobs most likely tokens.
- `echo` (optional): Whether to echo the prompt in the output or not.
- `stop` (optional): A sequence where the API will stop generating further tokens.

## Prerequisites

To use the `cortex.chat.completions` class, you need to have the following:

1. An active Cortex account and an API key.
2. The `@janhq/cortexso-node` package installed in your project.

## How do I use this function?

To use the `create` method, follow these steps:

1. Import the Cortex package and initialize a new instance with your API key and other configuration options.
2. Prepare the `body` object with the required parameters, such as the model ID and prompt.
3. Optionally, set any additional parameters in the `body` object, such as `max_tokens`, `temperature`, or `top_p`.
4. Call the `create` method on `cortex.chat.completions` and pass the `body` object as the first argument.
5. Optionally, pass a `RequestOptions` object as the second argument to configure request-specific options.
6. The method returns a promise that resolves with a `ChatCompletion` object containing the generated text completion(s).

By following these steps, you can leverage the power of Cortex's language models to generate high-quality text completions for various use cases, such as content creation, language translation, and question answering.
  
  