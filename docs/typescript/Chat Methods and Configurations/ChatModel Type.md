
  
  # **ChatModel Types**

**High Level**

The `ChatModel` type is an exported enum from the Cortex Node.js SDK's `chat` module. It represents the different models available for natural language processing tasks provided by the underlying language model service. The Cortex SDK is a wrapper around a popular language model API, but for clarity, let's refer to it as the Cortex API.

**Why should I use this?**

The `ChatModel` type is useful when you need to specify which language model you want to use for your natural language processing tasks. Different models have varying capabilities, performance characteristics, and specializations. By choosing the appropriate model, you can optimize your application's performance, accuracy, and resource utilization based on your specific requirements.

**What are the parameters or arguments?**

The `ChatModel` type is an enum, which means it has a predefined set of string values representing the available language models. These values are:

- `'gpt-4o'`
- `'gpt-4o-2024-05-13'`
- `'gpt-4-turbo'`
- `'gpt-4-turbo-2024-04-09'`
- `'gpt-4-0125-preview'`
- `'gpt-4-turbo-preview'`
- `'gpt-4-1106-preview'`
- `'gpt-4-vision-preview'`
- `'gpt-4'`
- `'gpt-4-0314'`
- `'gpt-4-0613'`
- `'gpt-4-32k'`
- `'gpt-4-32k-0314'`
- `'gpt-4-32k-0613'`
- `'gpt-3.5-turbo'`
- `'gpt-3.5-turbo-16k'`
- `'gpt-3.5-turbo-0301'`
- `'gpt-3.5-turbo-0613'`
- `'gpt-3.5-turbo-1106'`
- `'gpt-3.5-turbo-0125'`
- `'gpt-3.5-turbo-16k-0613'`

**Prerequisites**

- You must have the Cortex Node.js SDK installed and imported in your project.
- You should have a basic understanding of TypeScript and its type system.

**How do I use this?**

You can use the `ChatModel` type whenever a function or method in the Cortex SDK requires you to specify a language model. For example, if you're using the `chat.completions` method to generate text based on a prompt, you might use the `ChatModel` type as follows:

```typescript
import Cortex from '@janhq/cortexso-node';

const cortex = new Cortex({
  baseURL: 'http://localhost:1337/v1',
  apiKey: 'your-api-key',
});

const prompt = 'Write a short story about a brave knight.';
const model: ChatModel = 'gpt-4-turbo'; // Choosing the GPT-4 Turbo model

const response = await cortex.chat.completions({
  prompt,
  model,
  maxTokens: 500,
});

console.log(response.choices[0].text);
```

In this example, we've imported the Cortex SDK, created a new instance, and then used the `chat.completions` method to generate text based on the provided prompt. We've chosen the `'gpt-4-turbo'` model from the `ChatModel` enum to specify which language model we want to use for this task.

By selecting the appropriate model, you can leverage the strengths and capabilities of different language models to optimize your application's performance and meet your specific requirements.
  
  