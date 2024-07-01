
  
  # **Runs**

High Level

The `RunsPage` class is part of Cortex's Node.js SDK, specifically `cortex.beta.threads.runs`. It extends the `CursorPage` class and is used to represent a page of runs (executions) of a thread in a Cortex instance. This class allows you to iterate over the runs of a thread and retrieve them efficiently using pagination.

## Why should I use this class?

You should use the `RunsPage` class if you need to work with runs of a thread in your Cortex instance. It provides a convenient way to retrieve and iterate over the runs of a thread, especially when there are a large number of runs and pagination is required.

## Methods Overview and Code Examples

The `RunsPage` class inherits methods from the `CursorPage` class, which provides functionality for retrieving and iterating over paginated data. Here are some of the key methods:

1. **`async next(): Promise<Run[]>`: Retrieves the next page of runs from the Cortex API.

```javascript
const cortex = new Cortex({ /* ... */ });
const threadId = 'your-thread-id';
const runsPage = await cortex.beta.threads.runs.list(threadId);

// Get the first page of runs
const firstPageRuns = await runsPage.getAll();

// Get the next page of runs
const nextPageRuns = await runsPage.next();
```

2. **`async getAll(): Promise<Run[]>`: Retrieves all runs from the Cortex API, automatically handling pagination.

```javascript
const cortex = new Cortex({ /* ... */ });
const threadId = 'your-thread-id';
const runsPage = await cortex.beta.threads.runs.list(threadId);

// Get all runs of the thread
const allRuns = await runsPage.getAll();
```

## What are the required parameters?

The `RunsPage` class does not require any parameters to be instantiated. However, to retrieve the runs of a thread, you need to provide the thread ID when calling the `cortex.beta.threads.runs.list(threadId)` method.

## Prerequisites

Before using the `RunsPage` class, make sure you have:

1. Installed the Cortex Node.js SDK: `npm install @janhq/cortexso-node`
2. Imported the Cortex SDK in your project: `import Cortex from "@janhq/cortexso-node";`
3. Initialized the Cortex instance with your API key and base URL.

## How do I use this class?

To use the `RunsPage` class, follow these steps:

1. Import the Cortex SDK and initialize an instance:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://your-cortex-instance.com/v1",
  apiKey: "your-api-key",
});
```

2. Retrieve the `RunsPage` instance for a specific thread by calling `cortex.beta.threads.runs.list(threadId)`:

```javascript
const threadId = 'your-thread-id';
const runsPage = await cortex.beta.threads.runs.list(threadId);
```

3. Use the methods provided by the `RunsPage` class to retrieve and iterate over the runs of the thread:

```javascript
// Get the first page of runs
const firstPageRuns = await runsPage.getAll();

// Get the next page of runs
const nextPageRuns = await runsPage.next();

// Get all runs of the thread
const allRuns = await runsPage.getAll();
```

By following these steps, you can efficiently work with runs of a thread in your Cortex instance, leveraging the pagination functionality provided by the `RunsPage` class.
  
  