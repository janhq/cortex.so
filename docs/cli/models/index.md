---
title: Cortex Models
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex models`

This command allows you to start, stop, and manage various local or remote model operations within Cortex.


**Usage**:

```bash
cortex models [options]
```

**Options**:

| Option            | Description                                           | Required | Default value | Example         |
|-------------------|-------------------------------------------------------|----------|---------------|-----------------|
| `-h`, `--help`    | Display help information for the command.             | No       | -             | `-h`        |

## `cortex models pull`
:::info
This CLI command calls the following API endpoint:
- [Download Model](/api-reference#tag/models/get/v1/models/download/{modelId})
:::
This command downloads a model. You can use a HuggingFace `model_id` to download a model.


**Usage**:

```bash
cortex models pull <model_id>
```
`model_id`:
You can find the `model_id` for your desired model from:
- [Cortex Model Hub](https://huggingface.co/cortexso)
- [HuggingFace](https://huggingface.co/models)
- [Models](/models)
:::info
Currently Cortex only supports the following model format: **GGUF**, **ONNX**, and **TensorRT-LLM**.
:::

**Alias**:

The following alias is also available for downloading models:

- `cortex models download _`

**Options**:

| Option                    | Description                              | Required | Default value | Example                    |
|---------------------------|------------------------------------------|----------|---------------|----------------------------|
| `model_id`                | The identifier of the model you want to download. | Yes      | -             | `tinyllama`           |
| `-h`, `--help`              | Display help for command.                | No       | -             | `-h`                   |

## `cortex models get`
:::info
This CLI command calls the following API endpoint:
- [Get Model](/api-reference#tag/models/get/v1/models/{id})
:::
This command returns a model detail defined by a `model_id`.



**Usage**:

```bash
cortex models get <model_id>
```
For example, it returns the following:

```bash
{
  name: 'tinyllama',
  model: 'tinyllama',
  version: 1,
  files: [ 'C:\\Users\\ACER\\cortex\\models\\tinyllama\\model.gguf' ],
  stop: [ '</s>' ],
  top_p: 0.95,
  temperature: 0.7,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 4096,
  stream: true,
  ngl: 33,
  ctx_len: 4096,
  engine: 'cortex.llamacpp',
  prompt_template: '<|system|>\n{system_message}<|user|>\n{prompt}<|assistant|>',
  id: 'tinyllama',
  created: 1720659351720,
  object: 'model',
  owned_by: ''
}
```
:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::

**Options**:

| Option            | Description                                           | Required | Default value | Example         |
|-------------------|-------------------------------------------------------|----------|---------------|-----------------|
| `model_id`        | The identifier of the model you want to retrieve.     | Yes      | -             | `tinyllama`|
| `-h`, `--help`    | Display help information for the command.             | No       | -             | `-h`        |

## `cortex models list`
:::info
This CLI command calls the following API endpoint:
- [List Model](/api-reference#tag/models/get/v1/models)
:::
This command lists all local and remote models.



**Usage**:

```bash
cortex models list [options]
```
For example, it returns the following:
```bash
┌─────────┬───────────────────────────────────────────────┬──────────────────────────────┬───────────┐
│ (index) │ id                                            │ engine                       │ version   │
├─────────┼───────────────────────────────────────────────┼──────────────────────────────┼───────────┤
│ 0       │ 'gpt-3.5-turbo'                               │ 'openai'                     │ 1         │
│ 1       │ 'gpt-4o'                                      │ 'openai'                     │ 1         │
│ 2       │ 'llama3:onnx'                                 │ 'cortex.onnx'                │ 1         │
│ 3       │ 'llama3'                                      │ 'cortex.llamacpp'            │ undefined │
│ 4       │ 'openhermes-2.5:tensorrt-llm-windows-ada'     │ 'cortex.tensorrt-llm'        │ 1         │
│ 5       │ 'openhermes-2.5:tensorrt-llm'                 │ 'cortex.tensorrt-llm'        │ 1         │
│ 6       │ 'tinyllama'                                   │ 'cortex.llamacpp'            │ undefined │
└─────────┴───────────────────────────────────────────────┴──────────────────────────────┴───────────┘

```

**Options**:

| Option                    | Description                                        | Required | Default value | Example              |
|---------------------------|----------------------------------------------------|----------|---------------|----------------------|
| `-f`, `--format <format>` | Specify output format for the models list.         | No       | `json`        | `-f json`       |
| `-h`, `--help`            | Display help for command.                          | No       | -             | `-h`             |

## `cortex models remove`
:::info
This CLI command calls the following API endpoint:
- [Remove Model](/api-reference#tag/models/delete/v1/models/{id})
:::
This command deletes a local model defined by a `model_id`.



**Usage**:

```bash
cortex models remove <model_id>
```
:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::
**Options**:
| Option                    | Description                                                                 | Required | Default value        | Example                |
|---------------------------|-----------------------------------------------------------------------------|----------|----------------------|------------------------|
| `model_id`                | The identifier of the model you want to remove.                             | Yes      | -                    | `tinyllama`       |
| `-h`, `--help`            | Display help for command.                                                   | No       | -                    | `-h`               |

## `cortex models start`
:::info
This CLI command calls the following API endpoint:
- [Start Model](/api-reference#tag/models/post/v1/models/{modelId}/start)
:::
This command starts a model defined by a `model_id`.



**Usage**:

```bash
# Start a model
cortex models start [model_id]

# Start a model with a preset
cortex models start [model_id] [options]

# Start with a specified engine
cortex models start [model_id]:[engine] [options]
```


:::info
- This command uses a `model_id` from the model that you have downloaded or available in your file system.
- Model preset is applied only at the start of the model and does not change during the chat session.
:::

**Options**:

| Option                    | Description                                                               | Required | Default value                                | Example                |
|---------------------------|---------------------------------------------------------------------------|----------|----------------------------------------------|------------------------|
| `model_id`                | The identifier of the model you want to start.                            | No       | `Prompt to select from the available models` | `tinyllama`       |
| `-a`, `--attach`          | Attach to an interactive chat session.                                    | No       | `false`                                      | `-a`             |
| `-p`, `--preset <preset>` | Apply a chat preset to the chat session.                                  | No       | `false`                                      | `-p friendly`    |
| `-h`, `--help`            | Display help information for the command.                                 | No       | -                                            | `-h`               |

## `cortex models stop`
:::info
This CLI command calls the following API endpoint:
- [Stop Model](/api-reference#tag/models/post/v1/models/{modelId}/stop)
:::
This command stops a model defined by a `model_id`.



**Usage**:

```bash
cortex models stop <model_id>
```
:::info
- This command uses a `model_id` from the model that you have started before.
:::
**Options**:

| Option                    | Description                                                                 | Required | Default value        | Example                |
|---------------------------|-----------------------------------------------------------------------------|----------|----------------------|------------------------|
| `model_id`                | The identifier of the model you want to stop.                               | Yes      | -                    | `tinyllama`       |
| `-h`, `--help`            | Display help information for the command.                                   | No       | -                    | `-h`               |

## `cortex models update`
:::info
This CLI command calls the following API endpoint:
- [Update Model](/api-reference#tag/models/post/v1/models/{model}/config)
:::
This command updates a model configuration defined by a `model_id`.



**Usage**:

```bash
cortex models update [options] <model_id>
```
:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::
**Options**:

| Option                      | Description                                                                                           | Required | Default value        | Example                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------------------|----------|----------------------|-----------------------------------------------------------|
| `model_id`                  | The identifier of the model you want to update.                                                       | Yes      | -                    | `tinyllama`                                          |
| `-c`, `--options <options...>` | Specify the options to update the model. Syntax: `-c option1=value1 option2=value2`.  | Yes      | -                    | `-c max_tokens=100 temperature=0.5`                        |
| `-h`, `--help`              | Display help information for the command.                                                             | No       | -                    | `-h`                                                  |