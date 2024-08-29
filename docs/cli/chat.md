---
title: Cortex Chat
description: Cortex chat command.
slug: "chat"
---

:::warning
🚧 Cortex is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

# `cortex chat`
:::info
This CLI command calls the following API endpoint:
- [Start Model](/api-reference#tag/models/post/v1/models/{modelId}/start)
- [Chat Completions](/api-reference#tag/inference/post/v1/chat/completions)
:::

This command starts a chat session with a specified model, allowing you to interact directly with it through an interactive chat interface.

## Usage

```bash
cortex chat [options] [model_id] [message]
```
:::info
This command uses a `model_id` from the model that you have downloaded or available in your file system.
:::

## Options

| Option                        | Description                                                                                     | Required | Default value | Example                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | -------- | ------------- | ----------------------------- |
| `model_id`                    | Model ID to chat with. If there is no model_id provided, it will prompt to select from running models. | No       | -             | `mistral`                       |
| `-t`, `--thread <thread_id>`  | Thread ID. If not provided, will create new thread                                               | No       | -             | `-t 98765`                    |
| `-m`, `--message <message>`   | Message to send to the model                                                                     | No       | -             | `-m "Hello, model!"`          |
| `-a`, `--attach`              | Attach to interactive chat session                                                               | No       | `false`       | `-a`                          |
| `-p`, `--preset <preset>`     | Apply a chat preset to the chat session                                                          | No       | -             | `-p default`                  |
| `-h`, `--help`                | Display help information for the command                                                         | No       | -             | `-h`                          |

