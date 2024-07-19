---
title: Command Line Interface
description: Cortex CLI Overview.
slug: "command-line"
---

:::warning
🚧 Cortex is under construction.
:::

The Cortex CLI provides a Docker and Ollama-inspired CLI for running AI.

## How It Works
Running the CLI automatically starts the Cortex API server, inspired by the Docker CLI. The CLI commands will invoke the API server to perform operations.


## Usage
The Cortex CLI has a robust command set that streamlines your LLM interactions.
```bash
# Starts Cortex
cortex
# Pulls and starts a model
cortex run model_id
# Shows a model and cortex system status
cortex ps
# Stops a model
cortex stop
```

:::info
Check out the [CLI reference pages](/docs/cli) for all available commands and their specific functions.
:::