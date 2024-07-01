
  
  # **Steps Resource**

**High Level**

The `Steps` class is a part of the `cortex.beta` module in the Cortex Node.js SDK. It provides methods to interact with run steps, which are individual units of work performed during a run (execution) of a thread. This class allows you to retrieve and list run steps associated with a specific run within a thread.

The `cortex` object is initialized as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

**Why should I use this class?**

You should use the `Steps` class if you need to:

1. Retrieve detailed information about a specific run step within a run of a thread.
2. List all the run steps associated with a particular run of a thread.

This class provides a convenient way to access and manage run step data, which can be useful for monitoring the progress of a run, troubleshooting issues, or analyzing the execution history of a thread.

**Methods Overview and Code Examples**

1. **`retrieve(threadId, runId, stepId, options)`**

   Retrieves a specific run step within a run of a thread.

   ```javascript
   const threadId = 'thread_123';
   const runId = 'run_456';
   const stepId = 'step_789';

   const step = await cortex.beta.threads.runs.steps.retrieve(threadId, runId, stepId);
   console.log(step);
   ```

2. **`list(threadId, runId, query, options)`**

   Lists all the run steps associated with a specific run of a thread.

   ```javascript
   const threadId = 'thread_123';
   const runId = 'run_456';

   const steps = await cortex.beta.threads.runs.steps.list(threadId, runId);
   console.log(steps);
   ```

   You can also provide a `query` object to filter the list of run steps based on specific criteria.

   ```javascript
   const query = {
     status: 'completed',
     limit: 10,
   };

   const steps = await cortex.beta.threads.runs.steps.list(threadId, runId, query);
   console.log(steps);
   ```

**Parameters and Arguments**

Both `retrieve` and `list` methods require the following parameters:

- `threadId` (string): The unique identifier of the thread.
- `runId` (string): The unique identifier of the run within the thread.

The `retrieve` method additionally requires:

- `stepId` (string): The unique identifier of the run step.

The `list` method can optionally accept:

- `query` (object): An object containing filters and options for listing run steps (e.g., `status`, `limit`, `start`, etc.).
- `options` (object): An optional object containing additional request options (e.g., headers).

**Prerequisites**

Before using the `Steps` class, you must have:

1. Initialized the `cortex` object with appropriate credentials (API key and base URL).
2. A valid thread ID and run ID for the methods to work correctly.

**How to use this class?**

1. Import the Cortex library and initialize the `cortex` object with your credentials.
2. Access the `Steps` class through `cortex.beta.threads.runs.steps`.
3. Use the `retrieve` method to fetch a specific run step, providing the required `threadId`, `runId`, and `stepId`.
4. Use the `list` method to retrieve a list of run steps for a particular run, providing the required `threadId` and `runId`. Optionally, you can pass a `query` object to filter the list based on specific criteria.
5. Handle the returned data (run step or list of run steps) as needed in your application.

By utilizing the `Steps` class, you can easily integrate run step management capabilities into your application, allowing you to monitor and analyze the execution of threads in a more granular and detailed manner.
  
  