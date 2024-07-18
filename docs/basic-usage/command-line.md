---
title: Command Line Interface
description: Cortex CLI Overview.
slug: "command-line"
---

:::warning
🚧 Cortex is under construction.
:::

The Cortex CLI provides an Ollama-inspired CLI for managing and operating large language models (LLMs).

:::info
The Cortex CLI is OpenAI-compatible.
:::

## Installation

To get started with the Cortex CLI, please see our guides:

- [Quickstart](/docs/quickstart)
- [Device specific installation](/docs/category/installation)

These resources provide detailed instructions to ensure Cortex is set up correctly on your machine, accommodating various hardware environments.

## Usage

The Cortex CLI has a robust command set that streamlines your LLM interactions.

:::info
Check out the [CLI reference pages](/docs/cli) for a comprehensive guide on all available commands and their specific functions.
:::

## Storage

By default, Cortex CLI stores model binaries, thread history, and other usage data in:
`$(npm list -g @janhq/cortex)`.

You can find the respective folders within the `/lib/node_modules/@janhq/cortex/dist/` subdirectory.

:::info
**Ongoing Development**:

- Customizable Storage Locations
- Database Integration
  :::

## CLI Syntax
### OpenAI API Equivalence

The design of Cortex CLI commands strictly adheres to the method names used in the OpenAI API as a standard practice. This ensures a smooth transition for users familiar with OpenAI’s system.

For example:

- The `cortex chat` command is equivalent to the [`POST /v1/chat/completions` endpoint](/docs/cli/chat).

- The `cortex models get ID` command is equivalent to the [`GET /models ${ID}` endpoint](/docs/cli/models).

### Command Chaining

Cortex CLI’s command chaining support allows multiple commands to be executed in sequence with a simplified syntax. This approach reduces the complexity of command inputs and speeds up development tasks.

For example:

- [`cortex run`](/docs/cli/run): Downloads and starts the models along with the inference engine.
- [`cortex chat`](/docs/cli/chat): Starts a model and provides a chat interface to chat with the models.