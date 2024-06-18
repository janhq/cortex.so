---
title: Cortex Models Start
description: Cortex models subcommands.
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models start`

This command starts a model defined by a `model_id`.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
# Start a model
cortex models start [model_id]

# Start a model with a preset
cortex models start [model_id] [options]
```

:::note
Model preset is applied only at the start of the model and does not change during the chat session.
:::

## Options

| Option                   | Description                                                               | Required | Default value |
|--------------------------|---------------------------------------------------------------------------|----------|---------------|
| `model_id`                | The identifier of the model you want to start.                                                           | No       |      Prompt to select from the available models         |
| `-a, --attach`           | Attach to an interactive chat session.                                    | No       | `false`         |
| `-p, --preset <preset>`  | Apply a chat preset to the chat session.                                  | No       | `false`         |
| `-h, --help`             | Display help information for the command.                                 | No       |   -            |


