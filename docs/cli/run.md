---
title: Cortex Run
description: Cortex run command
slug: "run"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex run`
:::info
This CLI command calls the following API endpoint:
- [Download Model](/api-reference#tag/models/get/v1/models/download/{modelId}) (The command only calls this endpoint if the specified model is not already downloaded.)
- [Start Model](/api-reference#tag/models/post/v1/models/{modelId}/start)
:::

This command facilitates the initiation of an interactive chat shell with a specified machine-learning model.

:::info
This command supports both local and remote models.
:::
## Usage

```bash
cortex run [options] [model_id]
## With a specified engine
cortex run [options] [model_id]:[engine]
```
### `model_id`
You can find the `model_id` for your desired model from:
- [Cortex Model Hub](https://huggingface.co/cortexso)
- [HuggingFace](https://huggingface.co/models)
- [Models](/models)
:::info
Currently Cortex only supports the following model format: **GGUF**, **ONNX**, and **TensorRT-LLM**.
:::
### Local Model
To run a local model in Cortex:
```bash
## Local model
cortex run mistral
```
:::info
This command downloads and installs the model if not already available in your file system, then starts it for interaction.
:::
### Remote Model
To run a remote model:
1. Set the API key by using the [`cortex configs set`](/docs/cli/configs/set) command.
2.  Once you have set the API key, run the following command:
```bash
cortex run gpt-3.5-turbo
```


## Options

| Option                      | Description                                                                 | Required | Default value                                | Example                |
|-----------------------------|-----------------------------------------------------------------------------|----------|----------------------------------------------|------------------------|
| `model_id`                  | The identifier of the model you want to chat with.                          | No       | `Prompt to select from the available models` | `tinyllama`       |
| `-t`, `--thread <thread_id>`  | Specify the Thread ID. Defaults to creating a new thread if none specified. | No       | -                                            | `-t jan_1717650808`       |
| `-p`, `--preset`              | Apply a chat preset to the chat session.                                    | No       | -                                            | `-p friendly`    |
| `-h`, `--help`                | Display help information for the command.                                   | No       | -                                            | `-h`               |



## Command Chain

`cortex run` command is a convenience wrapper that automatically executes a sequence of commands to simplify user interactions:

1. [`cortex start`](/docs/cli/models/start): This command starts the specified model, making it active and ready for interactions.
2. [`cortex chat`](/docs/cli/chat): Following model activation, this command opens an interactive chat shell where users can directly communicate with the model.
