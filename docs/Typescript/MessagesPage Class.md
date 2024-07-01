
  
  # **MessagesPage**

High Level

The `MessagesPage` is a class exported from the `cortex.chat` module in the Node.js SDK `cortex`. It extends the `CursorPage` class and is designed to handle pagination for message resources. The `CursorPage` class is a generic class that provides functionality for iterating through paginated data using cursors.

## Why should I use this class?

You should use the `MessagesPage` class when you need to retrieve messages from the Cortex API in a paginated manner. It simplifies the process of fetching messages in batches and navigating through the pages of results. This class abstracts away the complexities of handling cursors and pagination, allowing you to focus on working with the message data.

## Methods Overview and Code Examples

The `MessagesPage` class inherits methods from the `CursorPage` class, which provides the following functionality:

1. `next()`: Fetches the next page of messages.
2. `previous()`: Fetches the previous page of messages.
3. `getData()`: Returns the current page of message data.
4. `hasMore()`: Checks if there are more pages of messages available.
5. `hasPrevious()`: Checks if there are previous pages of messages available.

Here's an example of how you might use the `MessagesPage` class:

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});

const messagesPage = await cortex.chat.messages.list();

// Get the first page of messages
const firstPageMessages = messagesPage.getData();

// Check if there are more pages
if (messagesPage.hasMore()) {
  // Fetch the next page
  await messagesPage.next();
  const nextPageMessages = messagesPage.getData();
}
```

## Prerequisites

Before using the `MessagesPage` class, you need to have the following:

1. An instance of the `Cortex` class initialized with the appropriate configuration (e.g., `baseURL` and `apiKey`).
2. Access to the `cortex.chat.messages` module, which provides the `MessagesPage` class.

## How do I use this class?

To use the `MessagesPage` class, follow these steps:

1. Import the `Cortex` class from the `@janhq/cortexso-node` package.
2. Initialize an instance of the `Cortex` class with the appropriate configuration (e.g., `baseURL` and `apiKey`).
3. Access the `cortex.chat.messages` module, which provides the `MessagesPage` class and its methods.
4. Call the appropriate method (e.g., `list()`) to obtain an instance of the `MessagesPage` class.
5. Use the methods provided by the `MessagesPage` class (`next()`, `previous()`, `getData()`, `hasMore()`, `hasPrevious()`) to navigate through the paginated message data and retrieve the desired information.

The `MessagesPage` class simplifies the process of working with paginated message data by abstracting away the complexities of handling cursors and pagination. It provides a convenient and efficient way to fetch and iterate through messages, allowing you to focus on the core functionality of your application.
  
  