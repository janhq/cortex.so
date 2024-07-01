
  
  # **ChatCompletionToolChoiceOption Type**

**High Level**

The `ChatCompletionToolChoiceOption` is a type exported from the Cortex Node.js SDK, specifically from the `cortex.chat` module. It represents the available options for configuring the tool choices when generating chat completions using the Cortex API.

**Why should I use this type?**

The `ChatCompletionToolChoiceOption` type helps developers specify how the AI model should handle tool choices when generating chat completions. It provides a set of predefined options to control the behavior of the AI model regarding tool usage.

**What are the available options?**

The `ChatCompletionToolChoiceOption` type is a union type that can take one of the following values:

1. `'none'`: This option instructs the AI model not to use any tools during the chat completion.
2. `'auto'`: With this option, the AI model can automatically select and use tools as it deems necessary during the chat completion process.
3. `'required'`: This option enforces the use of at least one tool during the chat completion.
4. `ChatCompletionNamedToolChoice`: This is a custom type that allows you to specify a named tool choice, which can be a string or an object representing the desired tool configuration.

**Prerequisites**

Before using the `ChatCompletionToolChoiceOption` type, you need to have the Cortex Node.js SDK installed and configured in your project. Additionally, you should have a basic understanding of TypeScript types and the Cortex API for chat completions.

**How do I use this type?**

You can use the `ChatCompletionToolChoiceOption` type when configuring the options for generating chat completions with the Cortex API. Typically, you would pass one of the available options as a value for the `toolChoice` parameter in the chat completion request.

Here's an example of how you might use the `ChatCompletionToolChoiceOption` type:

```typescript
import { Cortex, ChatCompletionToolChoiceOption } from '@janhq/cortexso-node';

const cortex = new Cortex({
  baseURL: 'http://localhost:1337/v1',
  apiKey: 'your-api-key',
});

const chatCompletion = await cortex.chat.createChatCompletion({
  messages: [
    { role: 'user', content: 'What is the capital of France?' },
  ],
  toolChoice: 'auto' as ChatCompletionToolChoiceOption,
});

console.log(chatCompletion.choices[0].message.content);
```

In this example, the `toolChoice` parameter is set to `'auto'`, which allows the AI model to automatically select and use tools as needed during the chat completion process.

**Explanation**

The `ChatCompletionToolChoiceOption` type is a crucial part of the Cortex Node.js SDK as it provides developers with control over how the AI model handles tool choices during chat completions. By specifying the appropriate option, developers can customize the behavior of the AI model to suit their specific use case, whether it's disabling tool usage, allowing automatic tool selection, or enforcing the use of at least one tool.
  
  