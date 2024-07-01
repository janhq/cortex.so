
  
  # **Cortex Chat API**

**High Level**

The `Chat` class is part of the Cortex Node.js SDK, which provides an interface to interact with the Cortex AI platform's chat functionality. It inherits from the `APIResource` class and includes a `completions` property, which is an instance of the `Completions` class from the `CompletionsAPI` module.

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "YOUR_API_KEY",
  });
```

**Why should I use this function, property, or Configuration?**

The `Chat` class allows you to easily integrate with the Cortex AI platform's chat capabilities, enabling you to generate human-like responses to user inputs. By leveraging the `completions` property, you can access the underlying completion API, which generates these responses based on the provided prompts and configurations.

**What are the required parameters or arguments?**

The `Chat` class itself does not require any parameters or arguments. However, when using the `completions` property, you will need to provide the necessary parameters for the specific completion API method you're calling.

**Prerequisites**

Before using the `Chat` class, ensure that you have:

1. Installed the Cortex Node.js SDK (`@janhq/cortexso-node`).
2. Obtained an API key from the Cortex AI platform.
3. Set up the appropriate configuration (e.g., base URL) for your Cortex instance.

**How do I use this function, property, or Configuration?**

To use the `Chat` class and its `completions` property, follow these steps:

1. Import the Cortex SDK and create an instance of the `Cortex` class with your API key and configuration:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "YOUR_API_KEY",
  });
```

2. Access the `Chat` class and its `completions` property:

```javascript
const chat = cortex.chat;
```

3. Use the `completions` property to call the desired completion API method with the appropriate parameters. For example, to generate a chat completion:

```javascript
const response = await chat.completions.create({
  prompt: "Hello, how are you?",
  model: "chat-ada",
  temperature: 0.7,
  max_tokens: 50,
});
```

In this example, the `create` method of the `Completions` class is called with parameters like `prompt`, `model`, `temperature`, and `max_tokens` to generate a chat response based on the provided prompt.

By following these steps, you can leverage the `Chat` class and its `completions` property to integrate Cortex AI's chat capabilities into your Node.js application.
  
  