
  
  # **ChatCompletionRole**

**High Level**

The `ChatCompletionRole` is a type exported from the `cortex` Node.js SDK, specifically from the `cortex.chat` module. It represents the different roles that can be assigned to messages in a conversation with a language model.

```typescript
import Cortex from "@janhq/cortex-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

**Why should I use this type?**

The `ChatCompletionRole` type is useful when working with conversational AI models that use the chat completion format. By defining the different roles explicitly, it becomes easier to organize and understand the flow of the conversation between the user, the assistant, and any other entities involved (e.g., tools or functions).

**What are the possible values?**

The `ChatCompletionRole` type is a union type with the following possible values:

- `'system'`: Represents system messages that provide instructions or context to the AI model.
- `'user'`: Represents messages from the user in the conversation.
- `'assistant'`: Represents messages from the AI assistant.
- `'tool'`: Represents messages from external tools or services used in the conversation.
- `'function'`: Represents messages related to functions or utilities used in the conversation.

**Prerequisites**

To use the `ChatCompletionRole` type, you need to have the `cortex` Node.js SDK installed and configured in your project.

**How do I use this type?**

You can use the `ChatCompletionRole` type when working with chat completion-related functions or classes provided by the `cortex.chat` module. For example, you might use it when creating or processing chat messages or when defining the structure of a conversation.

Here's an example of how you could use the `ChatCompletionRole` type:

```typescript
import { ChatCompletionRole } from '@janhq/cortex-node';

const messages = [
  { role: ChatCompletionRole.system, content: 'You are a helpful AI assistant.' },
  { role: ChatCompletionRole.user, content: 'What is the capital of France?' },
  { role: ChatCompletionRole.assistant, content: 'The capital of France is Paris.' },
  { role: ChatCompletionRole.user, content: 'Thank you!' },
];
```

In this example, we define an array of messages, each with a specific role (`system`, `user`, or `assistant`) and corresponding content. Using the `ChatCompletionRole` type ensures type safety and makes the code more readable and maintainable.
  
  