---
title: Cortex Models Start
description: Cortex models subcommands.
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models start`

This command starts a model defined by a `MODEL_ID`.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
# Start a model
cortex models start MODEL_ID

# Start a model with a preset
cortex models start MODEL_ID -p PRESET_FILENAME
```

:::note
Model preset is applied only at the start of the model and does not change during the chat session.
:::

## Options

| Option                   | Description                                                               | Required |
|--------------------------|---------------------------------------------------------------------------|-------------------|
| `-a, --attach`           | Attach to an interactive chat session. Default is `false`.                | No          |
| `-p, --preset <preset>`  | Apply a chat preset to the chat session. Default is `false`.              | No          |
| `-h, --help`             | Display help information for the command.                                  | No          |

