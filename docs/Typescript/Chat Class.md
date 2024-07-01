
  
  # **Chat Class**

High Level

The `Chat` class is part of the `cortex` Node.js SDK, which provides a convenient way to interact with the chat functionality of the Cortex API. It is a subclass of `APIResource` and contains a property `completions` that is an instance of the `Completions` class from the `CompletionsAPI` module. The `Completions` class likely handles the generation of text completions based on user prompts.

The `cortex` object is typically initialized like this:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "",
});
```

## Why should I use this class?

The `Chat` class provides a convenient way to interact with the chat functionality of the Cortex API. It encapsulates the logic for generating text completions based on user prompts, making it easier to integrate chat capabilities into your application.

## Methods Overview and Code Examples

The `Chat` class does not define any methods directly. Instead, it exposes the `completions` property, which is an instance of the `Completions` class from the `CompletionsAPI` module. This class likely contains methods for generating text completions based on user prompts.

To use the `completions` property, you can access it through an instance of the `Chat` class:

```javascript
const chat = new cortex.Chat();
const completion = await chat.completions.create({
    prompt: "Hello, how are you?",
    // Additional options...
});
console.log(completion.text);
```

This example demonstrates how to create a text completion using the `create` method of the `Completions` class, which is accessed through the `completions` property of the `Chat` instance.

## What are the required parameters or arguments?

The required parameters or arguments depend on the specific methods of the `Completions` class that you are using. For example, the `create` method likely requires a `prompt` parameter, which is the text input for which you want to generate a completion.

Additionally, there may be optional parameters or arguments that allow you to customize the behavior of the text completion generation, such as the maximum length of the generated text, the temperature (randomness) of the completion, or the language model to use.

## Prerequisites

Before using the `Chat` class, make sure you have:

1. Installed the `@janhq/cortexso-node` package in your project.
2. Imported the `Cortex` class from the package.
3. Initialized an instance of the `Cortex` class with the appropriate configuration, such as the base URL and API key.

## How do I use this class?

To use the `Chat` class, follow these steps:

1. Import the `Cortex` class and initialize an instance with the appropriate configuration:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "",
});
```

2. Create an instance of the `Chat` class:

```javascript
const chat = new cortex.Chat();
```

3. Use the `completions` property of the `Chat` instance to access the methods of the `Completions` class for generating text completions. For example:

```javascript
const completion = await chat.completions.create({
    prompt: "Hello, how are you?",
    // Additional options...
});
console.log(completion.text);
```

Make sure to consult the documentation or source code of the `Completions` class to understand the available methods and their required parameters or arguments.
  
  