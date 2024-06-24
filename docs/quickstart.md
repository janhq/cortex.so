---
title: Quickstart
description: Cortex Quickstart.
slug: quickstart
---

:::warning
🚧 Cortex is under construction.
:::

## CLI

To get started, confirm that your system meets the [hardware requirements](/docs/hardware), then run:

```bash
# Install Cortex CLI
npm i -g @janhq/cortex

# Download and run a GGUF model:
cortex run llama3

# The following formats are also supported:
cortex run llama3:onnx
cortex run llama3:tensorrt-llm
```

:::info
For more CLI help, please visit:
- [CLI Overview](/docs/command-line)
- [CLI Reference](/docs/cli)
:::

## Server

To start a server at port 1337, run:
```bash
cortex serve
```

Then visit the [OpenAPI Playground](http://localhost:1337/api) to invoke the API.

:::info
For more server help, please visit:
- [Server Overview](/docs/server)
- [`cortex serve` command](/docs/cli/serve)
:::

## Get Help

Finally, to see all available commands, run:
```bash
cortex
cortex CMD -h
```

Cortex is still in early development, so if you have any questions, please reach out to us: 
- [GitHub](https://github.com/janhq/cortex)
- [Discord](https://discord.gg/YFKKeuVu)

## Next Steps

- Familiarize yourself with Cortex's [capabilities](./chat-completions.mdx) and how they differ from OpenAI.
- Explore how we built Cortex through the [architecture](/docs/architecture) docs.
- Check out [Jan](https://jan.ai/), an open-source on-device Copilot, built using Cortex.