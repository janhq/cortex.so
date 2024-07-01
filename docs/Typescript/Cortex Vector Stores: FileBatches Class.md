
  
  # **Cortex Vector Stores: File Batches**

**High Level**

The `FileBatches` class is part of the `cortex` Node.js SDK, specifically `cortex.resources.beta.vector_stores`. It provides functionality for managing vector store file batches, which are used to process and store large collections of files as vector embeddings. This class is designed to work seamlessly with the `cortex` object, which is initialized like this:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

**Why should I use this class?**

The `FileBatches` class simplifies the process of uploading, processing, and managing large collections of files as vector embeddings. It provides a convenient interface for creating file batches, tracking their progress, and accessing the processed files. This is particularly useful when working with large datasets that need to be indexed and searched efficiently using vector embeddings.

**Methods Overview and Code Examples**

1. **create(vectorStoreId, body, options)**
   - Creates a new vector store file batch.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.create('my_vector_store_id', { file_ids: ['file1', 'file2'] })`

2. **retrieve(vectorStoreId, batchId, options)**
   - Retrieves information about a specific vector store file batch.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.retrieve('my_vector_store_id', 'batch_id')`

3. **cancel(vectorStoreId, batchId, options)**
   - Cancels the processing of a vector store file batch.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.cancel('my_vector_store_id', 'batch_id')`

4. **createAndPoll(vectorStoreId, body, options)**
   - Creates a new vector store file batch and polls until all files have been processed.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.createAndPoll('my_vector_store_id', { file_ids: ['file1', 'file2'] })`

5. **listFiles(vectorStoreId, batchId, query, options)**
   - Returns a list of vector store files in a specific batch.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.listFiles('my_vector_store_id', 'batch_id')`

6. **poll(vectorStoreId, batchId, options)**
   - Polls a vector store file batch until it completes processing.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.poll('my_vector_store_id', 'batch_id')`

7. **uploadAndPoll(vectorStoreId, { files, fileIds }, options)**
   - Uploads files concurrently and creates a vector store file batch, then polls until all files have been processed.
   - Example: `cortex.resources.beta.vector_stores.fileBatches.uploadAndPoll('my_vector_store_id', { files: [file1, file2] })`

**Parameters and Arguments**

Most methods in the `FileBatches` class require the following parameters:

- `vectorStoreId` (string): The ID of the vector store to which the file batch belongs.
- `batchId` (string): The ID of the specific file batch.
- `body` (object): An object containing the parameters for creating a new file batch, such as `file_ids`.
- `options` (object): An optional object containing additional configuration options, such as request headers or polling intervals.

**Prerequisites**

To use the `FileBatches` class, you must have:

1. A valid `cortex` object initialized with the appropriate API key and base URL.
2. A vector store created and configured for processing files as vector embeddings.

**How do I use this class?**

Here's an example of how you can use the `FileBatches` class to upload and process a collection of files:

```javascript
import Cortex from "@janhq/cortexso-node";
import fs from 'fs';

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "my_api_key",
});

const files = [
  fs.createReadStream('file1.txt'),
  fs.createReadStream('file2.pdf'),
  fs.createReadStream('file3.docx'),
];

const vectorStoreId = 'my_vector_store_id';

// Upload files and create a file batch
const batch = await cortex.resources.beta.vector_stores.fileBatches.uploadAndPoll(vectorStoreId, { files });

// Check the processing status
console.log(`Batch status: ${batch.status}`);

// List processed files
const filesPage = await cortex.resources.beta.vector_stores.fileBatches.listFiles(vectorStoreId, batch.id);
console.log(`Processed files: ${filesPage.data.map(file => file.file_id)}`);
```

In this example, we first create a `cortex` instance with the appropriate API key and base URL. We then define an array of files to be processed and the ID of the vector store where the files will be stored.

Next, we use the `uploadAndPoll` method to upload the files concurrently and create a new file batch. This method automatically polls the batch until all files have been processed.

Once the batch is processed, we can check its status and list the processed files using the `listFiles` method.

By following these steps, you can efficiently process and store large collections of files as vector embeddings using the `FileBatches` class provided by the `cortex` SDK.
  
  