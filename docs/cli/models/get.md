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
You can obtain a `model_id` for your desired model from our [Models hub](/models) or the [HuggingFace](https://huggingface.co/models). Currently, we support **GGUF**, **ONNX**, and **TensorRT-LLM** formats.
:::

## Options

| Option            | Description                                           | Required | Default value | Example         |
|-------------------|-------------------------------------------------------|----------|---------------|-----------------|
| `model_id`        | The identifier of the model you want to retrieve.     | Yes      | -             | `tinyllama`|
| `-h`, `--help`    | Display help information for the command.             | No       | -             | `-h`        |

