
  
  # **Vector Stores**

**High Level**

The `VectorStores` class is part of the `cortex` Node.js SDK, specifically the `cortex.beta` module. It provides functionality to manage vector stores, which are used to store and retrieve vector embeddings. Vector stores are useful for tasks such as semantic search, similarity comparisons, and clustering.

The `cortex` object is initialized like this:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

After initialization, you can access the `VectorStores` class through `cortex.beta.vectorStores`.

## Why should I use this class?

The `VectorStores` class provides a convenient way to interact with vector stores in your application. It abstracts away the underlying API calls and provides a unified interface for creating, retrieving, updating, listing, and deleting vector stores. By using this class, you can focus on the business logic of your application without worrying about the low-level details of making API requests.

## Methods Overview and Code Examples

1. **`create(body: VectorStoreCreateParams, options?: Core.RequestOptions): Core.APIPromise<VectorStore>`**
   - Creates a new vector store.
   - Example: `cortex.beta.vectorStores.create({ name: 'my-vector-store', metadata: { description: 'My vector store' } })`

2. **`retrieve(vectorStoreId: string, options?: Core.RequestOptions): Core.APIPromise<VectorStore>`**
   - Retrieves a vector store by its ID.
   - Example: `cortex.beta.vectorStores.retrieve('vector_store_id')`

3. **`update(vectorStoreId: string, body: VectorStoreUpdateParams, options?: Core.RequestOptions): Core.APIPromise<VectorStore>`**
   - Updates an existing vector store by its ID.
   - Example: `cortex.beta.vectorStores.update('vector_store_id', { name: 'new-name' })`

4. **`list(query?: VectorStoreListParams, options?: Core.RequestOptions): Core.PagePromise<VectorStoresPage, VectorStore>`**
   - Returns a list of vector stores.
   - Example: `cortex.beta.vectorStores.list({ limit: 10 })`

5. **`del(vectorStoreId: string, options?: Core.RequestOptions): Core.APIPromise<VectorStoreDeleted>`**
   - Deletes a vector store by its ID.
   - Example: `cortex.beta.vectorStores.del('vector_store_id')`

## What are the required parameters or arguments?

The required parameters or arguments for each method are listed below:

1. `create`: `VectorStoreCreateParams` (required), `Core.RequestOptions` (optional)
2. `retrieve`: `vectorStoreId` (required string), `Core.RequestOptions` (optional)
3. `update`: `vectorStoreId` (required string), `VectorStoreUpdateParams` (required), `Core.RequestOptions` (optional)
4. `list`: `VectorStoreListParams` (optional), `Core.RequestOptions` (optional)
5. `del`: `vectorStoreId` (required string), `Core.RequestOptions` (optional)

The `VectorStoreCreateParams`, `VectorStoreUpdateParams`, and `VectorStoreListParams` interfaces define the shape of the request bodies or query parameters for the respective methods.

## Prerequisites

Before using the `VectorStores` class, you need to have the following:

1. An instance of the `cortex` object, initialized with the appropriate API key and base URL.
2. Familiarity with vector embeddings and their use cases in your application.

## How do I use this class?

To use the `VectorStores` class, follow these steps:

1. Import the `Cortex` module from the `@janhq/cortexso-node` package.
2. Create an instance of the `Cortex` class with your API key and base URL.
3. Access the `VectorStores` class through `cortex.beta.vectorStores`.
4. Use the methods provided by the `VectorStores` class to create, retrieve, update, list, or delete vector stores as needed.

Here's an example of how you might use the `VectorStores` class:

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key",
});

// Create a new vector store
const newVectorStore = await cortex.beta.vectorStores.create({
  name: "my-vector-store",
  metadata: { description: "My vector store" },
});

// Retrieve the vector store
const retrievedVectorStore = await cortex.beta.vectorStores.retrieve(newVectorStore.id);

// Update the vector store
const updatedVectorStore = await cortex.beta.vectorStores.update(newVectorStore.id, { name: "updated-name" });

// List all vector stores
const vectorStoresList = await cortex.beta.vectorStores.list();

// Delete the vector store
await cortex.beta.vectorStores.del(newVectorStore.id);
```

By following these steps and the provided examples, you can effectively manage vector stores in your application using the `cortex` Node.js SDK.
  
  