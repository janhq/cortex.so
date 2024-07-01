
  
  # **Assistants**

## High Level

The `AssistantsPage` class is part of the Cortex Node.js SDK, specifically within the `cortex.resources.beta` namespace. It extends the `CursorPage` class, which is likely a utility class for handling paginated responses from the API. The `Assistant` class represents an individual AI assistant.

The Cortex object is initialized as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

## Why should I use this class?

The `AssistantsPage` class provides a convenient way to interact with the API endpoints related to AI assistants. It abstracts away the details of pagination and allows you to work with assistants in a more intuitive manner.

## Methods Overview and Code Examples

The `AssistantsPage` class inherits methods from the `CursorPage` class, which likely includes methods for retrieving and iterating over paginated results. Additionally, it may have custom methods specific to working with assistants.

Here's an example of how you might use the `AssistantsPage` class:

```javascript
// List all available assistants
const assistantsPage = await cortex.resources.beta.assistants.list();
const assistants = assistantsPage.data;

// Retrieve a specific assistant by ID
const assistant = await cortex.resources.beta.assistants.retrieve('assistant_id');
```

## Prerequisites

Before using the `AssistantsPage` class, you'll need to have the Cortex Node.js SDK installed and properly configured with your API key and base URL.

## How do I use this class?

1. Import the Cortex SDK and initialize the `cortex` object with your API key and base URL.
2. Access the `AssistantsPage` class through `cortex.resources.beta.assistants`.
3. Use the methods provided by the `AssistantsPage` class (and its parent `CursorPage` class) to list, retrieve, create, update, or delete assistants.

Here's an example of creating a new assistant:

```javascript
const assistant = await cortex.resources.beta.assistants.create({
  name: 'My Assistant',
  description: 'A helpful AI assistant',
  // Other assistant properties
});
```

Make sure to consult the official Cortex documentation for the latest available methods and their required parameters.
  
  