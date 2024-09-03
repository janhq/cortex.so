---
title: Cortex Models
---

:::warning
🚧 Cortex is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
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
ModelConfig Details:
-------------------
id: tinyllama
name: tinyllama 1B
model: tinyllama:1B
version: 1
stop: [</s>]
top_p: 0.95
temperature: 0.7
frequency_penalty: 0
presence_penalty: 0
max_tokens: 4096
stream: true
ngl: 33
ctx_len: 4096
engine: cortex.llamacpp
prompt_template:

<|system|>
{system_message}</s>




<|user|>
{prompt}</s>


<|assistant|>


system_template:

<|system|>

user_template: </s>




<|user|>

ai_template: </s>


<|assistant|>


tp: 0
text_model: false
files: [model_path]
created: 1725342964
```
:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::

**Options**:

| Option            | Description                                           | Required | Default value | Example         |
|-------------------|-------------------------------------------------------|----------|---------------|-----------------|
| `model_id`        | The identifier of the model you want to retrieve.     | Yes      | -             | `mistral`|
| `-h`, `--help`    | Display help information for the command.             | No       | -             | `-h`        |

## `cortex models list`
:::info
This CLI command calls the following API endpoint:
- [List Model](/api-reference#tag/models/get/v1/models)
:::
This command lists all the downloaded local and remote models.



**Usage**:

```bash
cortex models list [options]
```
For example, it returns the following:
```bash
+---------+----------------+-----------------+---------+
| (Index) |       ID       |      engine     | version |
+---------+----------------+-----------------+---------+
|    1    | tinyllama-gguf | cortex.llamacpp |    1    |
+---------+----------------+-----------------+---------+
|    2    | tinyllama      | cortex.llamacpp |    1    |
+---------+----------------+-----------------+---------+

```

**Options**:

| Option                    | Description                                        | Required | Default value | Example              |
|---------------------------|----------------------------------------------------|----------|---------------|----------------------|
| `-h`, `--help`            | Display help for command.                          | No       | -             | `-h`             |
<!-- | `-f`, `--format <format>` | Specify output format for the models list.         | No       | `json`        | `-f json`       | -->

## `cortex models start`
:::info
This CLI command calls the following API endpoint:
- [Start Model](/api-reference#tag/models/post/v1/models/{modelId}/start)
:::
This command starts a model defined by a `model_id`.



**Usage**:

```bash
# Start a model
cortex models start <model_id>

# Start a model with a preset
cortex models start <model_id> [options]

# Start with a specified engine
cortex models start <model_id>:[engine] [options]
```


:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::

**Options**:

| Option                    | Description                                                               | Required | Default value                                | Example                |
|---------------------------|---------------------------------------------------------------------------|----------|----------------------------------------------|------------------------|
| `model_id`                | The identifier of the model you want to start.                            | No       | `Prompt to select from the available models` | `mistral`       |
| `-h`, `--help`            | Display help information for the command.                                 | No       | -                                            | `-h`               |
<!-- | `-a`, `--attach`          | Attach to an interactive chat session.                                    | No       | `false`                                      | `-a`             |
| `-p`, `--preset <preset>` | Apply a chat preset to the chat session.                                  | No       | `false`                                      | `-p friendly`    | -->

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
This command uses a `model_id` from the model that you have started before.
:::
**Options**:

| Option                    | Description                                                                 | Required | Default value        | Example                |
|---------------------------|-----------------------------------------------------------------------------|----------|----------------------|------------------------|
| `model_id`                | The identifier of the model you want to stop.                               | Yes      | -                    | `mistral`       |
| `-h`, `--help`            | Display help information for the command.                                   | No       | -                    | `-h`               |

## `cortex models update`
:::info
This CLI command calls the following API endpoint:
- [Update Model](/api-reference#tag/models/patch/v1/models/{model})
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
| `model_id`                  | The identifier of the model you want to update.                                                       | Yes      | -                    | `mistral`                                          |
| `-c`, `--options <options...>` | Specify the options to update the model. Syntax: `-c option1=value1 option2=value2`.  | Yes      | -                    | `-c max_tokens=100 temperature=0.5`                        |
| `-h`, `--help`              | Display help information for the command.                                                             | No       | -                    | `-h`                                                  |

## `cortex models remove`
:::info
This CLI command calls the following API endpoint:
- [Delete Model](/api-reference#tag/models/delete/v1/models/{id})
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
| `model_id`                | The identifier of the model you want to remove.                             | Yes      | -                    | `mistral`       |
| `-h`, `--help`            | Display help for command.                                                   | No       | -                    | `-h`               |