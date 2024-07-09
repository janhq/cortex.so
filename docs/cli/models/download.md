---
title: Cortex Models Pull
description: Cortex models subcommands.
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models pull`

This command downloads a model. You can use a HuggingFace `model_id` to download a model.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
cortex models pull <model_id>
```
:::info
You can obtain a `model_id` for your desired model from our [Models hub](/models) or the [HuggingFace](https://huggingface.co/models). Currently, we support **GGUF**, **ONNX**, and **TensorRT-LLM** formats.
:::
## Alias

The following alias is also available for downloading models:

- `cortex models download _`

## Options

| Option                    | Description                              | Required | Default value | Example                    |
|---------------------------|------------------------------------------|----------|---------------|----------------------------|
| `model_id`                | The identifier of the model you want to download. | Yes      | -             | `tinyllama`           |
| `-h`, `--help`              | Display help for command.                | No       | -             | `-h`                   |



