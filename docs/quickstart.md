---
title: Quickstart
description: Cortex Quickstart.
slug: quickstart
---

:::warning
🚧 Cortex is under construction.
:::

## CLI

To get started, confirm that your system meets the [hardware requirements](/docs/requirements), then run:

```bash
# Install Cortex CLI

## Install using NPM
npm i -g cortexso

## Install using Brew
brew install cortexso

# Download and run a model (compatible with your hardware):
cortex run mistral

# Supported formats:
cortex run mistral:gguf
cortex run mistral:onnx
cortex run mistral:tensorrt-llm
```

:::info
For more CLI help, please visit:

- [CLI Overview](/docs/basic-usage/command-line)
- [CLI Reference](/docs/cli)
  :::

## Server

```bash
# Start a server at port 1337
cortex

## Run in a separate shell
cortex models start MODEL-ID
```

Then visit the [OpenAPI Playground](http://localhost:1337/api) to invoke the API.

:::info
For more server help, please visit:

- [Server Overview](/docs/basic-usage/server)
- [`cortex serve` command](/docs/cli/serve)
  :::

## Getting Models

`cortex run` and `cortex pull` expect a model ID, which can be a Hugging Face repo name (ending in -GGUF) or a cortexso model name from the [Cortex Registry](https://huggingface.co/cortexso).

```bash
# Download a model from any Hugging Face repo
cortex pull bartowski/Hermes-2-Theta-Llama-3-70B-GGUF

# Download a preconfigured model from https://huggingface.co/cortexso
cortex pull mistral
```

:::info
Read more about [model operations](./model-operations).
:::

## Get Help

```bash
cortex
cortex -h
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
