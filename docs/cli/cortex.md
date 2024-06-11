---
title: Cortex
description: Cortex CLI.
slug: /cli
---

:::warning
🚧 Cortex is under construction.
:::

# Cortex

Cortex is a CLI tool used to interact with the Jan application and its various functions.

<Callout type="info">
Cortex CLI is compatible with all OpenAI and OpenAI-compatible endpoints.
</Callout>

## Usage

```bash
cortex [command] [flag]
```

### Options

```
  -v, --version    Cortex version (default: false)
  -h, --help       Display help for command
```

## Sub Commands

- [cortex models](/docs/cli/models): Manage and configure models.
- [cortex serve](/docs/cli/serve): Launch an API endpoint server for the Cortex backend.
- [cortex chat](/docs/cli/chat): Send a chat request to a model.
- [cortex init|setup](/docs/cli/init): Initialize settings and download dependencies for Cortex.
- [cortex ps](/docs/cli/ps): Display active models and their operational status.
- [cortex kill](/docs/cli/kill): Terminate active Cortex processes.
- [cortex presets](/docs/cli/presets): Show all the available model presets within Cortex.
- [cortex embeddings](/docs/cli/embeddings): Create an embedding vector representing the input text.
- [cortex pull|download](/docs/cli/pull): Download a model.
- [cortex run](/docs/cli/run): Shortcut to start a model and chat **(EXPERIMENTAL)**.
