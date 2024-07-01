
  
  # **Files API for Vector Stores**

**High Level**

The `Files` class is part of the `cortex` Node.js SDK, specifically within the `cortex.beta.vectorStores` namespace. It provides methods for managing files associated with vector stores, which are data structures used for storing and searching through large amounts of text data.

The `cortex` object is initialized like this:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

## Why should I use this API?

The `Files` API allows you to efficiently manage the lifecycle of files within vector stores. It provides methods for creating, retrieving, listing, deleting, and polling the status of files associated with a vector store. This is particularly useful when working with large datasets or documents that need to be processed and stored in a searchable format.

## Methods Overview and Code Examples

1. **`create(vectorStoreId, body, options)`**: Creates a new vector store file by attaching a file to a vector store.

```javascript
const fileData = await cortex.beta.vectorStores.files.create(
  'vector_store_id',
  {
    file_id: 'file_id',
    purpose: 'purpose',
  }
);
```

2. **`retrieve(vectorStoreId, fileId, options)`**: Retrieves the details of a specific vector store file.

```javascript
const fileData = await cortex.beta.vectorStores.files.retrieve(
  'vector_store_id',
  'file_id'
);
```

3. **`list(vectorStoreId, query, options)`**: Returns a list of vector store files associated with a specific vector store.

```javascript
const filesData = await cortex.beta.vectorStores.files.list(
  'vector_store_id',
  {
    limit: 10,
  }
);
```

4. **`del(vectorStoreId, fileId, options)`**: Deletes a vector store file from the associated vector store.

```javascript
const deleteResponse = await cortex.beta.vectorStores.files.del(
  'vector_store_id',
  'file_id'
);
```

5. **`createAndPoll(vectorStoreId, body, options)`**: Attaches a file to a vector store and waits for it to be processed.

```javascript
const fileData = await cortex.beta.vectorStores.files.createAndPoll(
  'vector_store_id',
  {
    file_id: 'file_id',
    purpose: 'purpose',
  }
);
```

6. **`poll(vectorStoreId, fileId, options)`**: Polls the status of a vector store file until it finishes processing.

```javascript
const fileData = await cortex.beta.vectorStores.files.poll(
  'vector_store_id',
  'file_id'
);
```

7. **`upload(vectorStoreId, file, options)`**: Uploads a file to the `files` API and attaches it to the specified vector store.

```javascript
const fileData = await cortex.beta.vectorStores.files.upload(
  'vector_store_id',
  fileData
);
```

8. **`uploadAndPoll(vectorStoreId, file, options)`**: Uploads a file to a vector store and polls until processing is complete.

```javascript
const fileData = await cortex.beta.vectorStores.files.uploadAndPoll(
  'vector_store_id',
  fileData
);
```

## Parameters and Arguments

Most methods in the `Files` API require the following parameters:

- `vectorStoreId` (string): The unique identifier of the vector store.
- `fileId` (string): The unique identifier of the file.
- `body` (object): An object containing the necessary data for creating or updating a file.
- `options` (object, optional): Additional options for the request, such as headers or query parameters.

## Prerequisites

Before using the `Files` API, make sure you have:

1. Initialized the `cortex` object with the appropriate API credentials and base URL.
2. Created a vector store using the `cortex.beta.vectorStores` API.
3. Prepared the necessary file(s) or file identifiers to be associated with the vector store.

## How to Use

1. Import the `Cortex` module and initialize the `cortex` object with your API credentials and base URL.
2. Access the `Files` API through `cortex.beta.vectorStores.files`.
3. Use the appropriate method from the `Files` API to perform the desired operation on vector store files, such as creating, retrieving, listing, deleting, or polling the status of files.
4. Handle the responses from the API methods as needed, either by processing the data or handling any errors that may occur.

By following these steps and utilizing the `Files` API, you can efficiently manage the lifecycle of files associated with vector stores, enabling you to work with large datasets or documents in a searchable and organized manner.
  
  