---
title: Cortex
description: Cortex CLI.
slug: /cli
---

:::warning
🚧 Cortex.cpp is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

# Cortex
:::info
This is the initial command you need to run to start using Cortex.cpp.
:::

This command starts the Cortex.cpp API server, which runs on port `3928` by default.

## Usage

```bash
cortex [command] [options]
```

## Options

| Option                       | Description                               | Required | Default value | Example                       |
| ---------------------------- | ----------------------------------------- | -------- | ------------- | ----------------------------- |
| `-v`, `--version`            | Show version.                              | No       | -       | `-v`                          |
| `-h`, `--help`               | Display help information for the command.  | No       | -             | `-h`                          |
| `--verbose`               | Show the detailed command logs                                 | No       | -       | `--verbose`                          |
<!-- | `-a`, `--address <address>`  | Address to use.                            | No       | -             | `-a 192.168.1.1`              |
| `-p`, `--port <port>`        | Port to serve the application.             | No       | -             | `-p 1337`                     | -->
<!--| `--dataFolder <dataFolder>`  | Set the data folder directory             | No       | -             | `--dataFolder /path/to/data`  | -->


## Command Chaining
Cortex CLI's command chaining support allows multiple commands to be executed in sequence with a simplified syntax.

For example:

- [cortex run](/docs/cli/run)
- [cortex chat](/docs/cli/chat)

## Sub Commands

- [cortex models](/docs/cli/models): Manage and configure models.
- [cortex chat](/docs/cli/chat): Send a chat request to a model.
- [cortex ps](/docs/cli/ps): Display active models and their operational status.
- [cortex embeddings](/docs/cli/embeddings): Create an embedding vector representing the input text.
- [cortex engines](/docs/cli/engines): Manage Cortex.cpp engines.
- [cortex pull|download](/docs/cli/pull): Download a model.
- [cortex run](/docs/cli/run): Shortcut to start a model and chat.
- [cortex update](/docs/cli/update): Update the Cortex.cpp version.
- [cortex stop](/docs/cli/stop): Stop the Cortex.cpp API server.
