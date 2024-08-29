---
title: cortex.js
description: How to integrate cortex.js with a Typescript application.
slug: "ts-library"
---

:::warning
🚧
- Cortex is still under construction.
- The current release will soon be deprecated in favor of a pure C++ implementation.
- READMEs and documentation may be out of sync as we focus on product development.
:::

Cortex can be used in a Typescript application with the `cortex.js` library. Cortex provides a Typescript client library as a **fork of OpenAI's [Typescript library](https://github.com/openai/openai-node)** with additional methods for Local AI.

## Installation

```ts
npm install @janhq/cortexso-node
```

## Usage

1. Replace the OpenAI import with Cortex in your application:

```diff
- import OpenAI from 'openai';
+ import Cortex from '@janhq/cortexso-node';
```

2. Modify the initialization of the client to use Cortex:

```diff
- const openai = new OpenAI({
+ const cortex = new Cortex({
    baseURL: "BASE_URL", // The default base URL for Cortex is 'http://localhost:1337'
    apiKey: "OPENAI_API_KEY", // This can be omitted if using the default
});

```

### Example Usage

```js
import Cortex from "@janhq/cortexso-node";

async function inference() {
  const cortex = new Cortex({
    baseURL: "http://localhost:1337/v1",
    apiKey: "",
  });

  // Start the model to run locally
  await cortex.models.start("tinyllama");

  // Inference using the local model
  const resp = await cortex.chat.completions.create({
    model: "llama3",
    messages: [
      { role: "system", content: "You are a chatbot." },
      { role: "user", content: "What is the capital of the United States?" },
    ],
  });
}

inference();
```
