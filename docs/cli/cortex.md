---
title: Cortex
description: Cortex CLI.
slug: /cli
---

:::warning
🚧 Cortex is under construction.
:::

# Cortex

This command starts an API server that runs as a daemon process.

## Usage

```bash
cortex [command] [options]
```

## Options

| Option                       | Description                               | Required | Default value | Example                       |
| ---------------------------- | ----------------------------------------- | -------- | ------------- | ----------------------------- |
| `-a`, `--address <address>`  | Address to use                            | No       | -             | `-a 192.168.1.1`              |
| `-p`, `--port <port>`        | Port to serve the application             | No       | -             | `-p 1337`                     |
| `-l`, `--logs`               | Show logs                                 | No       | `false`       | `-l`                          |
| `--dataFolder <dataFolder>`  | Set the data folder directory             | No       | -             | `--dataFolder /path/to/data`  |
| `-v`, `--version`            | Show version                              | No       | `false`       | `-v`                          |
| `-h`, `--help`               | Display help information for the command  | No       | -             | `-h`                          |


## Command Chaining
Cortex CLI's command chaining support allows multiple commands to be executed in sequence with a simplified syntax.

For example:

- [cortex run](/docs/cli/run)
- [cortex chat](/docs/cli/chat)

## Sub Commands

- [cortex models](/docs/cli/models): Manage and configure models.
- [cortex chat](/docs/cli/chat): Send a chat request to a model.
- [cortex ps](/docs/cli/ps): Display active models and their operational status.
- [cortex presets](/docs/cli/presets): Show all the available model presets within Cortex.
- [cortex embeddings](/docs/cli/embeddings): Create an embedding vector representing the input text.
- [cortex benchmark](/docs/cli/benchmark): Benchmark and analyze the performance of a specific AI model using your system.
- [cortex engine](/docs/cli/engine): Manage Cortex engines.
- [cortex pull|download](/docs/cli/pull): Download a model.
- [cortex run](/docs/cli/run): Shortcut to start a model and chat.
- [cortex telemetry](/docs/cli/telemetry): Retrieve telemetry logs for monitoring and analysis.
- [cortex stop](/docs/cli/kill): Stop the API server.
