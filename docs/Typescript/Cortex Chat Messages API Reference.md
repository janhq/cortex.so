
  
  # **Cortex Chat Messages**

High Level

The `Messages` class is part of the Cortex node.js SDK, specifically the `cortex.chat` module. It provides methods for managing messages within chat threads. The class is initialized alongside the main `Cortex` object, which is typically done as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key",
});
```

After initializing the `Cortex` object, you can access the `Messages` class through `cortex.chat.messages`.

## Why should I use this class?

The `Messages` class simplifies the process of creating, retrieving, updating, listing, and deleting messages within chat threads. It provides a convenient interface for interacting with the Cortex API, handling authentication, and managing request options and responses.

## Methods Overview and Code Examples

1. **create(threadId, body, options)**: Creates a new message within a specified chat thread.
   Example:
   ```javascript
   const newMessage = await cortex.chat.messages.create('thread_id', {
     content: 'Hello, this is a new message!',
   });
   ```

2. **retrieve(threadId, messageId, options)**: Retrieves a specific message from a chat thread.
   Example:
   ```javascript
   const message = await cortex.chat.messages.retrieve('thread_id', 'message_id');
   ```

3. **update(threadId, messageId, body, options)**: Updates the content of an existing message.
   Example:
   ```javascript
   const updatedMessage = await cortex.chat.messages.update('thread_id', 'message_id', {
     content: 'Updated message content',
   });
   ```

4. **list(threadId, query, options)**: Retrieves a list of messages from a chat thread, optionally filtering the results using a query object.
   Example:
   ```javascript
   const messages = await cortex.chat.messages.list('thread_id', {
     limit: 10,
     cursor: 'next_cursor',
   });
   ```

5. **del(threadId, messageId, options)**: Deletes a specific message from a chat thread.
   Example:
   ```javascript
   await cortex.chat.messages.del('thread_id', 'message_id');
   ```

## Parameters and Arguments

Each method in the `Messages` class accepts specific parameters and arguments:

- `threadId` (string): The ID of the chat thread.
- `messageId` (string): The ID of the message.
- `body` (object): An object containing the message data, such as `content`.
- `query` (object, optional): An object containing query parameters for filtering the list of messages.
- `options` (object, optional): An object containing additional request options, such as headers or query parameters.

## Prerequisites

Before using the `Messages` class, ensure that you have:

1. Installed the Cortex node.js SDK by running `npm install @janhq/cortexso-node`.
2. Imported the `Cortex` class and created an instance with your API key and base URL.
3. Obtained the necessary chat thread IDs and message IDs for the operations you want to perform.

## How to Use

Here's a step-by-step guide on how to use the `Messages` class:

1. Import the Cortex SDK and create an instance:
   ```javascript
   import Cortex from "@janhq/cortexso-node";
   const cortex = new Cortex({
     baseURL: "http://localhost:1337/v1",
     apiKey: "your_api_key",
   });
   ```

2. Access the `Messages` class through `cortex.chat.messages`.

3. Use the provided methods to perform various operations on messages within chat threads. For example, to create a new message:
   ```javascript
   const newMessage = await cortex.chat.messages.create('thread_id', {
     content: 'Hello, this is a new message!',
   });
   ```

4. Refer to the method documentation for specific parameter requirements and usage examples.

5. Handle responses and errors appropriately in your application logic.

By following these steps, you can effectively leverage the `Messages` class to manage chat messages within the Cortex platform, streamlining your development process and improving the overall user experience.
  
  