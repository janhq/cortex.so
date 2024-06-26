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

## Install using NPM
npm i -g cortexso

## Install using Brew
brew tap janhq/cortexso
brew install cortexso

# Download and run a model (compatible with your hardware):
cortex run llama3

# Supported formats:
cortex run llama3:gguf
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
cortex models start MODEL-ID
```

Then visit the [OpenAPI Playground](http://localhost:1337/api) to invoke the API.

:::info
For more server help, please visit:
- [Server Overview](/docs/server)
- [`cortex serve` command](/docs/cli/serve)
:::

## Getting Models

`cortex run` and `cortex pull` expects a model ID, which can be a Hugging Face repo name or a CortexHub model name from the [Cortex Registry](https://huggingface.co/cortexhub).

```bash
# Download a model from any Hugging Face repo
cortex pull bartowski/Hermes-2-Theta-Llama-3-70B-GGUF

# Download a preconfigured model from https://huggingface.co/cortexhub
cortex pull llama3
```
:::info
Read more about [model operations](./model-operations).
:::

## Get Help

Finally, to see all available commands, run:
```bash
cortex
cortex CMD -h
```

:::info
Cortex is still in early development, so if you have any questions, please reach out to us: 
- [GitHub](https://github.com/janhq/cortex)
- [Discord](https://discord.gg/YFKKeuVu)
:::

## Next Steps

- Familiarize yourself with Cortex's [capabilities](./chat-completions.mdx) and how they differ from OpenAI.
- Explore how we built Cortex through the [architecture](/docs/architecture) docs.
- Check out [Jan](https://jan.ai/), an open-source on-device Copilot, built using Cortex.