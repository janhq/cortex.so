---
title: Cortex
description: Cortex CLI.
slug: /cli
---

:::warning
🚧 Cortex is under construction.
:::

# Cortex

This command initiates Cortex operations and starts the Cortex Engine API server, which runs in the background on port `1337` by default.


## Usage

```bash
cortex [command] [options]
```

## Options

| Option               | Description                               | Required | Default value | Example          |
| -------------------- | ----------------------------------------- | -------- | ------------- | ---------------- |
| `-a`, `--address`    | Set the address for the server.           | No       | `localhost`   | `-a 0.0.0.0`     |
| `-p`, `--port`       | Set the port for the server.              | No       | `1337`        | `-p 4040`        |
| `-l`, `--logs`       | Attach logs to the output.                | No       | `false`       | `-l`   |
| `--dataFolder`       | Specify the data folder path.             | No       | -             | `--dataFolder`   |
| `-v`, `--version`    | Display the Cortex version.               | No       | `false`       | `-v`             |
| `-h`, `--help`       | Display help information for the command. | No       | -             | `-h`             |


## Command Chaining
Cortex CLI's command chaining support allows multiple commands to be executed in sequence with a simplified syntax.

For example:

- [cortex run](/docs/cli/run)
- [cortex chat](/docs/cli/chat)

## Sub Commands

- [cortex models](/docs/cli/models): Manage and configure models.
- [cortex chat](/docs/cli/chat): Send a chat request to a model.
- [cortex benchmark](/docs/cli/benchmark): Benchmark and analyze the performance of a specific AI model using your system.
- [cortex ps](/docs/cli/ps): Display active models and their operational status.
- [cortex presets](/docs/cli/presets): Show all the available model presets within Cortex.
- [cortex embeddings](/docs/cli/embeddings): Create an embedding vector representing the input text.
- [cortex pull|download](/docs/cli/pull): Download a model.
- [cortex run](/docs/cli/run): Shortcut to start a model and chat.
- [cortex telemetry](/docs/cli/telemetry): Retrieve telemetry logs for monitoring and analysis.
