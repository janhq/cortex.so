---
title: Cortex Models Pull
description: Cortex models subcommands.
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models pull`

This command downloads a model. You can use a HuggingFace `MODEL_ID` to download a model.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
cortex models pull MODEL_ID
```

## Alias

The following alias is also available for downloading models:

- `cortex models download _`

## Options

| Option            | Description                              | Required |
|-------------------|------------------------------------------|-------------------|
| `-m, --model <model_id>`     | The identifier of the model.              | Yes          |
| `-h, --help`      | Display help for command.                 | No         |

