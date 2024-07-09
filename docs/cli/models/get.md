---
title: Cortex Models Get
description: Cortex models subcommands.
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models get`

This command returns a model detail defined by a `model_id`.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
cortex models get <model_id>
```
:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::

## Options

| Option            | Description                                           | Required | Default value | Example         |
|-------------------|-------------------------------------------------------|----------|---------------|-----------------|
| `model_id`        | The identifier of the model you want to retrieve.     | Yes      | -             | `tinyllama`|
| `-h`, `--help`    | Display help information for the command.             | No       | -             | `-h`        |

