---
title: Cortex Pull
description: Cortex CLI.
slug: "pull"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex pull`

This command facilitates downloading machine learning models from various model hubs, including the popular 🤗 [Hugging Face](https://huggingface.co/).

By default, models are downloaded to the `node_modules library path. For additional information on storage paths and options, refer [here](/docs/cli).



## Alias

The following alias is also available for downloading models:

- `cortex download _`

## Usage

```bash
cortex pull <model_id>
```

### Preconfigured Models
Cortex provides preconfigured models with optimal runtime parameters and templates available from the [Cortex Model Hub](https://huggingface.co/cortexso) on Hugging Face.
You can find the `model_id` for your desired model from our [Cortex Model Hub](https://huggingface.co/cortexso) or any supported model on Hugging Face, or the [Models](/models) section on our Cortex website.

:::info
Currently Cortex only supports the following model format: **GGUF**, **ONNX**, and **TensorRT-LLM**.
:::

```bash
## To use our preconfigured models
cortex pull mistral
## To use other supported format models outside our repository:
cortex pull microsoft/Phi-3-mini-4k-instruct-gguf
```
## Options

| Option         | Description                                       | Required | Default value | Example     |
| -------------- | ------------------------------------------------- | -------- | ------------- | ----------- |
| `model_id`     | The identifier of the model you want to download. | Yes      | -             | `tinyllama` |
| `-h`, `--help` | Display help information for the command.         | No       | -             | `-h`        |
