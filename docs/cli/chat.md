---
title: Cortex Chat
description: Cortex chat command.
slug: "chat"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex chat`

This command starts a chat session with a specified model, allowing you to interact directly with it through an interactive chat interface.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
cortex chat [options] [model_id] [message]
```

## Options

| Option                      | Description                                                                                         | Required | Default value                              | Example                                      |
|-----------------------------|-----------------------------------------------------------------------------------------------------|----------|-------------------------------------------|----------------------------------------------|
| `model_id`                  | The identifier of the model you want to chat with.                                                  | No       | `Prompt to select from the available models` | `tinyllama`                             |
| `-t`, `--thread <thread_id>`  | Specify the Thread ID.                                                                              | No       | `Create a new thread`                     | `-t jan_1717650808`                             |
| `-m`, `--message <message>`   | Message to send to the model.                                                                       | Yes      | -                                         | `-m Hello World`            |
| `-a`, `--attach`              | Attach to an interactive chat session.                                                              | No       | `false`                                   | `-a`                                   |
| `-h`, `--help`                | Display help information for the command.                                                           | No       | -                                         | `-h`                                     |

