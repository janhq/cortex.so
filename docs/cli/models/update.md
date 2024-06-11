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
cortex models update MODEL_ID OPTIONS
```

## Options

```
  -m, --model <model_id>      Model Id to update. By default, it will update the current active model, if any
  -c, --options <options...>  Specify the options to update the model. Syntax: -c option1=value1 option2=value2. For
                              example: cortex models update -c max_tokens=100 temperature=0.5
  -h, --help                  Display help for command
```
