
  
  # **Beta Resources**

High Level

The `Beta` class is part of the Cortex Node.js SDK, providing access to various beta resources and APIs. It is a subclass of `APIResource` and serves as a centralized point for managing different beta functionalities.

The `Beta` class exposes the following properties:

- `vectorStores`: An instance of the `VectorStoresAPI.VectorStores` class, which allows you to interact with vector stores for semantic search and similarity operations.
- `chat`: An instance of the `ChatAPI.Chat` class, which provides methods for interacting with the chat functionality, such as sending messages and retrieving responses.
- `assistants`: An instance of the `AssistantsAPI.Assistants` class, which allows you to manage and interact with different AI assistants.
- `threads`: An instance of the `ThreadsAPI.Threads` class, which provides methods for working with conversation threads, such as creating, updating, and retrieving threads.

These properties are initialized with the `_client` instance, which is likely a reference to the main Cortex client object.

## Why should I use this function, property, function, or Configuration?

The `Beta` class is useful when you want to leverage the beta features and functionalities offered by the Cortex platform. It provides a convenient way to access and interact with various beta resources, such as vector stores, chat assistants, and conversation threads. By using this class, you can explore and test new capabilities before they are officially released, allowing you to stay ahead of the curve and potentially provide feedback to help shape the final product.

## Methods Overview and Code Examples

The `Beta` class itself does not contain any methods. Instead, it exposes instances of other classes that provide the actual functionality. Here's an overview of the methods available through the exposed properties:

1. **`vectorStores`**:
   - `create(params)`: Create a new vector store.
   - `list(params)`: List all available vector stores.
   - `retrieve(id)`: Retrieve a specific vector store by its ID.
   - `update(id, params)`: Update an existing vector store.
   - `delete(id)`: Delete a vector store.
   - `search(id, params)`: Search within a vector store.

2. **`chat`**:
   - `create(params)`: Create a new chat session.
   - `send(id, params)`: Send a message to an existing chat session.
   - `retrieve(id)`: Retrieve the conversation history of a chat session.

3. **`assistants`**:
   - `create(params)`: Create a new AI assistant.
   - `list(params)`: List all available AI assistants.
   - `retrieve(id)`: Retrieve a specific AI assistant by its ID.
   - `update(id, params)`: Update an existing AI assistant.
   - `delete(id)`: Delete an AI assistant.

4. **`threads`**:
   - `create(params)`: Create a new conversation thread.
   - `list(params)`: List all available conversation threads.
   - `retrieve(id)`: Retrieve a specific conversation thread by its ID.
   - `update(id, params)`: Update an existing conversation thread.
   - `delete(id)`: Delete a conversation thread.

For detailed information on the parameters and usage of each method, please refer to the official Cortex documentation or the respective class documentation.

## What are the params or arguments required?

The specific parameters or arguments required for each method will vary depending on the functionality being used. However, most methods will likely require at least an `id` parameter to identify the resource being operated on (e.g., vector store ID, chat session ID, assistant ID, thread ID).

Additionally, methods that create or update resources will typically require an object containing the necessary parameters or configuration options. For example, the `create` method for vector stores might require parameters such as the vector store name, dimensions, and metadata.

It's recommended to consult the official Cortex documentation or the respective class documentation for detailed information on the required parameters for each method.

## Prerequisites

Before using the `Beta` class and its associated resources, make sure you have:

1. **Installed the Cortex Node.js SDK**: Follow the official installation guide to add the Cortex SDK to your Node.js project.
2. **Initialized the Cortex client**: Create an instance of the Cortex client by providing the necessary configuration options, such as the base URL and API key.
3. **Obtained the necessary permissions**: Ensure that you have the appropriate permissions and access rights to use the beta resources you want to interact with.

## How do I use this function, property, function, or Configuration?

To use the `Beta` class and its associated resources, follow these steps:

1. **Import the Cortex SDK and create a client instance**:

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key_here",
});
```

2. **Access the `Beta` class and its properties**:

```javascript
const beta = cortex.beta;
```

3. **Use the exposed properties to interact with the desired beta resources**:

```javascript
// Create a new vector store
const vectorStoreParams = {
  name: "My Vector Store",
  dimensions: 768,
  metadata: { description: "My first vector store" },
};
const newVectorStore = await beta.vectorStores.create(vectorStoreParams);

// Send a message to a chat session
const chatParams = {
  message: "Hello, how can I assist you today?",
};
const chatResponse = await beta.chat.send("chat_session_id", chatParams);

// List all available AI assistants
const assistantsList = await beta.assistants.list();

// Create a new conversation thread
const threadParams = {
  name: "Customer Support Thread",
  metadata: { topic: "Order inquiries" },
};
const newThread = await beta.threads.create(threadParams);
```

Remember to handle errors and consult the official Cortex documentation or the respective class documentation for detailed usage examples and parameter specifications.
  
  