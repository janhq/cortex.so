---
title: Quickstart
description: Cortex Quickstart.
slug: quickstart
---

:::warning
🚧 Cortex is under construction.
:::

To get started, confirm that your system meets the [hardware requirements](/docs/hardware), and follow the steps below:

```bash
# 1. Install Cortex using NPM
npm i -g @janhq/cortex

# 2. Download a GGUF model
cortex models pull llama3

# 3. Run the model to start chatting
cortex models run llama3

# 4. (Optional) Run Cortex in OpenAI-compatible server mode
cortex serve
```

:::info
For more details regarding the Cortex server mode, please see here:

- [Server Endpoint](/docs/server)
- [`cortex serve` command](/docs/cli/serve)

:::

## What's Next?

With Cortex now fully operational, you're ready to delve deeper:

- Explore how to [install Cortex](/docs/category/installation) across various hardware environments.
- Familiarize yourself with the comprehensive set of [Cortex CLI commands](/docs/cli) available for use.
- Gain insights into the system’s design by examining the [architecture](/docs/architecture) of Cortex.
