---
title: Cortex Models Update
description: Cortex models subcommands.
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models update`

This command updates a model configuration defined by a `MODEL_ID`.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
cortex models update [flags] [model_id]
```

## Options

| Option                      | Description                                                                                           | Required | Default value        |
|-----------------------------|-------------------------------------------------------------------------------------------------------|----------|----------------------|
| `-m, --model <model_id>`    | Specify the Model ID to update.      | No       | Active model (if any) |
| `-c, --options <options...>`| Specify the options to update the model. Syntax: `-c option1=value1 option2=value2`. Example: `-c max_tokens=100 temperature=0.5` | Yes      |         -             |
| `-h, --help`                | Display help information for the command.                                                              | No       |         -             |


