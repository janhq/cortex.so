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

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Alias

The following alias is also available for downloading models:

- `cortex download _`

## Usage

```bash
cortex pull <model_id>
```

### Preconfigured Models

Reconfigured models (with optimal runtime parameters and templates) are available from the [Cortex Model Hub](https://huggingface.co/cortexso) on Hugging Face.

Models can be downloaded using a Docker-like interface with the following syntax: `repo_name:branch_name`. Each variant may include different quantizations and sizes, typically organized in the repository’s branches.

Available models include [llama3](https://huggingface.co/janhq/llama3), [mistral](https://huggingface.co/janhq/mistral), [tinyllama](https://huggingface.co/janhq/tinyllama), and [many more](https://huggingface.co/janhq).

:::info
New models will soon be added to [Cortex Model Hub](https://huggingface.co/cortexso).
:::

```bash
# Pull a specific variant with `repo_name:branch`
cortex pull llama3:7b
```

You can also download `size`, `format`, and `quantization` variants of each model.

```bash
cortex pull llama3:8b-instruct-v3-gguf-Q4_K_M
cortex pull llama3:8b-instruct-v3-tensorrt-llm
```

:::info
Model variants are provided via the `branches` in each model's Hugging Face repo.
:::

### Hugging Face Models

You can download any GGUF, TensorRT, or supported-format model directly from Hugging Face.

```bash
# cortex pull org_name/repo_name
cortex pull microsoft/Phi-3-mini-4k-instruct-gguf
```

## Options

| Option         | Description                                       | Required | Default value | Example     |
| -------------- | ------------------------------------------------- | -------- | ------------- | ----------- |
| `model_id`     | The identifier of the model you want to download. | Yes      | -             | `tinyllama` |
| `-h`, `--help` | Display help information for the command.         | No       | -             | `-h`        |
