---
title: Command Line Interface
description: Cortex CLI Overview.
slug: "command-line"
---

:::warning
- Cortex is still under construction.
- The current release will soon be deprecated in favor of a pure C++ implementation.
- READMEs and documentation may be out of sync as we focus on product development.
:::

Cortex has a [Docker](https://docs.docker.com/engine/reference/commandline/cli/) and [Ollama](https://ollama.com/)-inspired [CLI syntax](/docs/cli) for running model operations. 

## How It Works
Cortex’s CLI invokes the Cortex Engine’s API, which runs in the background on port `1337`. 


## Basic Usage
### [Start Cortex Server](/docs/cli)
```bash
# By default the server will be started on port `1337`
cortex
```
### [Run Model](/docs/cli/run)
Cortex supports these [Built-in Models](/models)
```bash
# Pull and start a model
cortex run <model_id>
```
### [Chat with Model](/docs/cli/chat)
```bash
# chat with a model
cortex chat <model_id>
```
### [Show the Model State](/docs/cli/ps) 
```bash
# Show a model and cortex system status
cortex ps
```
### [Stop Model](/docs/cli/stop)
```bash
# Stop a model
cortex stop
```
### [Pull Model](/docs/cli/pull)
```bash
# Pull a model
cortex pull <model_id>
```
