
  
  # **Cortex Threads API**

The `Threads` class in the Cortex Node.js SDK provides a set of methods for managing threads in the Cortex platform. A thread is a conversation between a user and an AI assistant, and it allows you to create, update, retrieve, and delete threads, as well as manage runs (executions) within those threads.

## Why should I use this API?

The Threads API is a core component of the Cortex platform, enabling you to build conversational applications and chatbots that leverage the power of large language models. By creating and managing threads, you can maintain context and state across multiple interactions with an AI assistant, allowing for more natural and coherent conversations.

## Methods Overview and Code Examples

### `create(body?: ThreadCreateParams, options?: Core.RequestOptions): Core.APIPromise<Thread>`

Creates a new thread.

Example:

```javascript
const thread = await cortex.beta.threads.create({
  name: 'My Thread',
  description: 'A thread for testing',
});
```

### `list(options?: Core.RequestOptions): Core.PagePromise<ThreadsPage, Thread>`

Retrieves a list of threads.

Example:

```javascript
const threads = await cortex.beta.threads.list();
```

### `retrieve(threadId: string, options?: Core.RequestOptions): Core.APIPromise<Thread>`

Retrieves a specific thread by its ID.

Example:

```javascript
const thread = await cortex.beta.threads.retrieve('thread_id_123');
```

### `update(threadId: string, body: ThreadUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Thread>`

Updates a specific thread by its ID.

Example:

```javascript
const updatedThread = await cortex.beta.threads.update('thread_id_123', {
  name: 'Updated Thread Name',
});
```

### `clean(threadId: string, options?: Core.RequestOptions): Core.APIPromise<Thread>`

Cleans up (deletes) all runs and messages within a specific thread.

Example:

```javascript
const cleanedThread = await cortex.beta.threads.clean('thread_id_123');
```

### `del(threadId: string, options?: Core.RequestOptions): Core.APIPromise<ThreadDeleted>`

Deletes a specific thread by its ID.

Example:

```javascript
const deletedThread = await cortex.beta.threads.del('thread_id_123');
```

### `createAndRun(body: ThreadCreateAndRunParams, options?: Core.RequestOptions): APIPromise<RunsAPI.Run> | APIPromise<Stream<AssistantsAPI.AssistantStreamEvent>>`

Creates a new thread and runs it in a single request. This method can return either a `Run` object (for non-streaming runs) or a stream of `AssistantStreamEvent` objects (for streaming runs).

Example (non-streaming):

```javascript
const run = await cortex.beta.threads.createAndRun({
  name: 'My Thread',
  description: 'A thread for testing',
  prompt: 'Hello, how are you?',
});
```

Example (streaming):

```javascript
const stream = await cortex.beta.threads.createAndRun({
  name: 'My Thread',
  description: 'A thread for testing',
  prompt: 'Hello, how are you?',
  stream: true,
});

stream.on('data', (event) => {
  console.log(event.text);
});
```

### `createAndRunPoll(body: ThreadCreateAndRunParamsNonStreaming, options?: Core.RequestOptions & { pollIntervalMs?: number }): Promise<Threads.Run>`

Creates a new thread, starts a run, and polls for a terminal state (completion or error).

Example:

```javascript
const run = await cortex.beta.threads.createAndRunPoll({
  name: 'My Thread',
  description: 'A thread for testing',
  prompt: 'Hello, how are you?',
}, { pollIntervalMs: 1000 });
```

### `createAndRunStream(body: ThreadCreateAndRunParamsBaseStream, options?: Core.RequestOptions): AssistantStream`

Creates a new thread and streams the run back as an `AssistantStream`.

Example:

```javascript
const stream = cortex.beta.threads.createAndRunStream({
  name: 'My Thread',
  description: 'A thread for testing',
  prompt: 'Hello, how are you?',
  stream: true,
});

stream.on('data', (event) => {
  console.log(event.text);
});
```

## Required Parameters and Arguments

The methods in the `Threads` class accept various parameters and arguments, depending on the specific method being called. These parameters and arguments are typically specified as objects or strings, and they allow you to configure the behavior of the method or provide the necessary data for the operation.

For example, the `create` method accepts a `ThreadCreateParams` object, which contains properties such as `name`, `description`, and `prompt`. The `update` method accepts a `threadId` string to identify the thread to be updated, as well as a `ThreadUpdateParams` object containing the updated properties.

The `createAndRun` method accepts a `ThreadCreateAndRunParams` object, which includes properties for configuring the thread and the run, such as `name`, `description`, `prompt`, and `stream`.

It's essential to refer to the documentation or type definitions for each method to understand the required and optional parameters and arguments, as well as their expected formats and constraints.

## Prerequisites

Before using the `Threads` API, you need to have the following:

1. An instance of the Cortex Node.js SDK, initialized with the appropriate configuration (e.g., API key, base URL).
2. Familiarity with JavaScript/TypeScript and Node.js development.
3. Understanding of the Cortex platform and its concepts, such as threads, runs, and assistants.

## How to Use the Threads API

To use the `Threads` API, follow these steps:

1. Import the Cortex Node.js SDK and create an instance of the `Cortex` class with your API key and base URL.

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key",
});
```

2. Access the `Threads` class through the `cortex.beta.threads` property.

```javascript
const threadsAPI = cortex.beta.threads;
```

3. Use the available methods of the `Threads` class to create, manage, and interact with threads and runs. For example:

```javascript
// Create a new thread
const thread = await threadsAPI.create({
  name: 'My Thread',
  description: 'A thread for testing',
});

// Create a new thread and run it in a single request (non-streaming)
const run = await threadsAPI.createAndRun({
  name: 'My Thread',
  description: 'A thread for testing',
  prompt: 'Hello, how are you?',
});

// Create a new thread and stream the run
const stream = threadsAPI.createAndRunStream({
  name: 'My Thread',
  description: 'A thread for testing',
  prompt: 'Hello, how are you?',
  stream: true,
});

stream.on('data', (event) => {
  console.log(event.text);
});
```

4. Handle the responses and events from the API as needed, such as processing the results of a run or handling streaming events.

5. Optionally, you can pass additional options or configurations to the API methods using the `options` parameter, which is an object that can contain properties like headers, query parameters, or other settings specific to the Cortex platform.

By following these steps, you can leverage the power of the Cortex Threads API to build conversational applications and chatbots that can maintain context and state across multiple interactions with an AI assistant.
  
  