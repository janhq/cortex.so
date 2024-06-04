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
cortex chat --model MODEL_ID
```

### Options

```
  -t, --thread <thread_id>  Thread Id. If not provided, will create new thread
  -m, --message <message>   Message to send to the model
  -a, --attach              Attach to interactive chat session (default: false)
  -h, --help                display help for command
```
