---
title: Cortex
description: Cortex CLI.
slug: /cli
---

:::warning
🚧 Cortex is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

# Cortex
:::info
This is the initial command you need to run to start using Cortex.
:::

This command starts the Cortex process and the API server, which runs on port `1337` by default.

## Usage

```bash
cortex [command] [options]
```

## Options

| Option                       | Description                               | Required | Default value | Example                       |
| ---------------------------- | ----------------------------------------- | -------- | ------------- | ----------------------------- |
| `-a`, `--address <address>`  | Address to use.                            | No       | -             | `-a 192.168.1.1`              |
| `-p`, `--port <port>`        | Port to serve the application.             | No       | -             | `-p 1337`                     |
| `-v`, `--version`            | Show version.                              | No       | `false`       | `-v`                          |
| `-h`, `--help`               | Display help information for the command.  | No       | -             | `-h`                          |
<!-- | `-l`, `--logs`               | Show logs                                 | No       | `false`       | `-l`                          |
| `--dataFolder <dataFolder>`  | Set the data folder directory             | No       | -             | `--dataFolder /path/to/data`  | -->


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
- [cortex engines](/docs/cli/engines): Manage Cortex engines.
- [cortex pull|download](/docs/cli/pull): Download a model.
- [cortex run](/docs/cli/run): Shortcut to start a model and chat.
- [cortex telemetry](/docs/cli/telemetry): Retrieve telemetry logs for monitoring and analysis.
- [cortex stop](/docs/cli/stop): Stop the API server.
