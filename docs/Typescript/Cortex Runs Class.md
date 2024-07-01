
  
  # **Cortex Runs**

## High-Level Overview

The `Runs` class is part of the Cortex Node.js SDK, specifically within the `cortex.beta.threads` namespace. It provides methods for managing runs, which are executions of an AI assistant or agent in the context of a thread. The Cortex object is initialized as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

## Why Use the Runs Class?

The `Runs` class allows you to create, retrieve, update, list, cancel, and stream runs within the Cortex AI platform. Runs are essential for executing AI assistants and agents, as they encapsulate the input, output, and state of an AI interaction. By using the `Runs` class, you can programmatically control and monitor the execution of AI tasks.

## Methods Overview and Code Examples

### create(threadId, body, options)

Creates a new run within a specified thread.

**Parameters:**
- `threadId` (string): The ID of the thread in which to create the run.
- `body` (RunCreateParams): The parameters for creating the run, such as the model, instructions, and input.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** A promise that resolves to either a `Run` object (for non-streaming runs) or a `Stream` of `AssistantStreamEvent` objects (for streaming runs).

**Example:**

```javascript
const runParams = {
  model: "claude-v1",
  instructions: "Write a short story about a magical adventure.",
  input: "Once upon a time, there was a...",
};

const run = await cortex.beta.threads.runs.create("thread-id", runParams);
console.log(run.output);
```

### retrieve(threadId, runId, options)

Retrieves a specific run by its ID within a thread.

**Parameters:**
- `threadId` (string): The ID of the thread containing the run.
- `runId` (string): The ID of the run to retrieve.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** A promise that resolves to a `Run` object.

**Example:**

```javascript
const run = await cortex.beta.threads.runs.retrieve("thread-id", "run-id");
console.log(run.status);
```

### update(threadId, runId, body, options)

Updates the properties of an existing run.

**Parameters:**
- `threadId` (string): The ID of the thread containing the run.
- `runId` (string): The ID of the run to update.
- `body` (RunUpdateParams): The updated properties for the run.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** A promise that resolves to the updated `Run` object.

**Example:**

```javascript
const updatedParams = {
  instructions: "Write a longer story with more details.",
};

const updatedRun = await cortex.beta.threads.runs.update("thread-id", "run-id", updatedParams);
console.log(updatedRun.instructions);
```

### list(threadId, query, options)

Lists all runs within a specified thread.

**Parameters:**
- `threadId` (string): The ID of the thread containing the runs.
- `query` (RunListParams, optional): Query parameters for filtering and sorting the list of runs.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** A promise that resolves to a `PagePromise` of `RunsPage` objects, each containing an array of `Run` objects.

**Example:**

```javascript
const runsPage = await cortex.beta.threads.runs.list("thread-id");
console.log(runsPage.data);
```

### cancel(threadId, runId, options)

Cancels an in-progress run.

**Parameters:**
- `threadId` (string): The ID of the thread containing the run.
- `runId` (string): The ID of the run to cancel.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** A promise that resolves to the canceled `Run` object.

**Example:**

```javascript
const canceledRun = await cortex.beta.threads.runs.cancel("thread-id", "run-id");
console.log(canceledRun.status); // 'cancelled'
```

### stream(threadId, body, options)

Creates a streaming run and returns an `AssistantStream` object for listening to the stream events.

**Parameters:**
- `threadId` (string): The ID of the thread in which to create the streaming run.
- `body` (RunCreateParamsBaseStream): The parameters for creating the streaming run.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** An `AssistantStream` object.

**Example:**

```javascript
const streamParams = {
  model: "claude-v1",
  instructions: "Write a short story about a magical adventure.",
  input: "Once upon a time, there was a...",
  stream: true,
};

const stream = cortex.beta.threads.runs.stream("thread-id", streamParams);
stream.on("data", (event) => {
  console.log(event.output);
});
```

### submitToolOutputs(threadId, runId, body, options)

Submits tool outputs for a run that requires action (i.e., has a status of `"requires_action"`).

**Parameters:**
- `threadId` (string): The ID of the thread containing the run.
- `runId` (string): The ID of the run to submit tool outputs for.
- `body` (RunSubmitToolOutputsParams): The tool outputs to submit.
- `options` (RequestOptions, optional): Additional options for the request.

**Returns:** A promise that resolves to either a `Run` object (for non-streaming runs) or a `Stream` of `AssistantStreamEvent` objects (for streaming runs).

**Example:**

```javascript
const toolOutputs = {
  toolOutputs: [
    {
      tool: "search-quality-reflection",
      output: "The search results provide a good overview of magical adventures...",
    },
  ],
};

const run = await cortex.beta.threads.runs.submitToolOutputs("thread-id", "run-id", toolOutputs);
console.log(run.output);
```

## Prerequisites

To use the `Runs` class, you need to have the following:

1. A valid API key for the Cortex AI platform.
2. A thread ID for the thread in which you want to create or manage runs.

## How to Use the Runs Class

Here's a general outline of how to use the `Runs` class:

1. Import the Cortex SDK and initialize the client with your API key and base URL.
2. Create a new run by calling the `create` method with the thread ID, run parameters, and optional options.
3. Retrieve information about an existing run using the `retrieve` method with the thread ID and run ID.
4. Update a run's properties using the `update` method with the thread ID, run ID, and updated parameters.
5. List all runs in a thread using the `list` method with the thread ID and optional query parameters.
6. Cancel an in-progress run using the `cancel` method with the thread ID and run ID.
7. Create a streaming run and listen to the stream events using the `stream` method with the thread ID and streaming run parameters.
8. Submit tool outputs for a run that requires action using the `submitToolOutputs` method with the thread ID, run ID, and tool outputs.

Throughout the process, you can use optional `RequestOptions` to customize the API requests, such as setting headers or handling streaming responses.

By following these steps and utilizing the various methods provided by the `Runs` class, you can effectively manage and interact with AI runs within the Cortex platform, enabling you to build powerful applications that leverage AI capabilities.
  
  