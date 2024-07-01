
  
  # **Batches**

High Level

The `Batches` class is part of the `cortex` Node.js SDK, specifically under the `cortex` namespace. It allows you to interact with the Batches API, which enables you to create, retrieve, list, and cancel batches of requests. This class is typically used when you need to execute multiple requests simultaneously or process a large volume of data.

The `cortex` object is initialized like this:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

## Why should I use this class?

The `Batches` class provides a convenient way to work with batches of requests, which can be more efficient than making individual requests, especially when dealing with a large volume of data. Batching requests can help reduce the number of API calls, improve performance, and simplify your application's logic.

## Methods Overview and Code Examples

### `create(body: BatchCreateParams, options?: Core.RequestOptions): Core.APIPromise<Batch>`

Creates and executes a batch from an uploaded file of requests.

Example:

```javascript
const batchFile = '/path/to/batch/file.json';
const batchParams = { file: batchFile };

cortex.batches.create(batchParams)
  .then(batch => {
    console.log(batch);
  })
  .catch(error => {
    console.error(error);
  });
```

### `retrieve(batchId: string, options?: Core.RequestOptions): Core.APIPromise<Batch>`

Retrieves a specific batch by its ID.

Example:

```javascript
const batchId = 'batch_123';

cortex.batches.retrieve(batchId)
  .then(batch => {
    console.log(batch);
  })
  .catch(error => {
    console.error(error);
  });
```

### `list(query?: BatchListParams, options?: Core.RequestOptions): Core.PagePromise<BatchesPage, Batch>`

Lists your organization's batches. You can optionally provide query parameters to filter the results.

Example:

```javascript
const listParams = { limit: 10 };

cortex.batches.list(listParams)
  .then(batchesPage => {
    console.log(batchesPage.data);
    console.log(batchesPage.next_page);
  })
  .catch(error => {
    console.error(error);
  });
```

### `cancel(batchId: string, options?: Core.RequestOptions): Core.APIPromise<Batch>`

Cancels an in-progress batch by its ID.

Example:

```javascript
const batchId = 'batch_123';

cortex.batches.cancel(batchId)
  .then(batch => {
    console.log(batch);
  })
  .catch(error => {
    console.error(error);
  });
```

## What are the required parameters?

The required parameters for each method vary:

- `create`: `body` (BatchCreateParams) is required, which should contain the necessary information for creating the batch, such as the file path or file contents.
- `retrieve`: `batchId` (string) is required, which is the unique identifier of the batch you want to retrieve.
- `list`: No required parameters, but you can optionally provide `query` (BatchListParams) to filter the results.
- `cancel`: `batchId` (string) is required, which is the unique identifier of the batch you want to cancel.

## Prerequisites

Before using the `Batches` class, you need to have the `cortex` object initialized with your API key and base URL. Additionally, make sure you have the necessary permissions to perform the desired operations on batches.

## How do I use this class?

1. Import the `Cortex` class from the `@janhq/cortexso-node` package and create a new instance with your API key and base URL.
2. Access the `batches` property from the `cortex` instance to interact with the `Batches` class.
3. Call the desired method (`create`, `retrieve`, `list`, or `cancel`) with the appropriate parameters.
4. Handle the returned Promise or use async/await to process the response or catch any errors.

The `Batches` class provides a convenient way to work with batches of requests in the Cortex API. By following the examples and understanding the required parameters, you can streamline your application's logic and efficiently process large volumes of data.
  
  