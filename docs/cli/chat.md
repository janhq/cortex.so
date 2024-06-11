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
cortex chat --model MODEL_ID "Hello World"
```

### Options

```
  -t, --thread <thread_id>  Thread Id. By default, will create new thread
  -m, --message <message>   Message to send to the model. By default, it will choose the current active models, if any
  -a, --attach              Attach to interactive chat session. By default, this value is `false`
  -h, --help                Display help for command
```
