---
title: Cortex Run
description: Cortex run command
slug: "run"
---

:::warning
🚧 Cortex.cpp is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

# `cortex run`
:::info
This CLI command calls the following API endpoint:
- [Download Model](/api-reference#tag/models/post/v1/models/{modelId}/pull) (The command only calls this endpoint if the specified model is not downloaded yet.)
- Install Engine (The command only calls this endpoint if the specified engine is not downloaded yet.)
- [Start Model](/api-reference#tag/models/post/v1/models/{modelId}/start)
- [Chat Completions](/api-reference#tag/inference/post/v1/chat/completions) (The command makes a call to this endpoint if the `-c` option is used.)
:::

This command facilitates the initiation of an interactive chat shell with a specified machine-learning model.

## Usage

```bash
cortex run [options] <model_id>
# With a specified engine
cortex run [options] <model_id>:[engine]
```
### `model_id`
You can use the [Built-in models](/docs/hub/cortex-hub) or Supported [HuggingFace models](/docs/hub/hugging-face).

:::info
This command downloads and installs the model if not already available in your file system, then starts it for interaction.
:::


## Options

| Option                      | Description                                                                 | Required | Default value                                | Example                |
|-----------------------------|-----------------------------------------------------------------------------|----------|----------------------------------------------|------------------------|
| `model_id`                  | The identifier of the model you want to chat with.                          | Yes       | `Prompt to select from the available models` | `mistral`       |
| `-h`, `--help`                | Display help information for the command.                                   | No       | -                                            | `-h`               |
<!-- | `-t`, `--thread <thread_id>`  | Specify the Thread ID. Defaults to creating a new thread if none specified. | No       | -                                            | `-t jan_1717650808`       |
| `-p`, `--preset`              | Apply a chat preset to the chat session.                                    | No       | -                                            | `-p friendly`    |
| `-c`, `--chat`                | Start a chat session after running the model.                                   | No       | -                                            | `-c`               | -->



## Command Chain

`cortex run` command is a convenience wrapper that automatically executes a sequence of commands to simplify user interactions:

1. [`cortex pull`](/docs/cli/models/): This command pulls the specified model if the model is not yet downloaded.
2. [`cortex engines install`](/docs/cli/engines/): This command installs the specified engines if not yet downloaded.
3. [`cortex models start`](/docs/cli/models/): This command starts the specified model, making it active and ready for interactions.
4. [`cortex chat`](/docs/cli/chat): Following model activation, this command opens an interactive chat shell where users can directly communicate with the model.
