---
title: Cortex Run
description: Cortex run command
slug: "run"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex run`

This command facilitates the initiation of an interactive chat shell with a specified machine-learning model.

:::info
- This command is compatible with all OpenAI and OpenAI-compatible endpoints.
- This command supports both local and remote models.
:::

## Usage

```bash
cortex run [options] [model_id]
## With a specified engine
cortex run [options] [model_id]:[engine]
```
Example:
```bash
## Local model
cortex run llama3
## Remote model
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
