---
title: Command Line Interface
description: Cortex CLI Overview.
slug: "command-line"
---

:::warning
🚧 Cortex is under construction.
:::

Cortex has a [Docker](https://docs.docker.com/engine/reference/commandline/cli/) and [Ollama](https://ollama.com/)-inspired [CLI syntax](/docs/cli) for running model operations. 

## How It Works
Cortex’s CLI invokes the Cortex Engine’s API, which runs in the background on port `1337`. 


## Basic Usage
### Start Cortex Server
```bash
# By default the server will be started on port `1337`
cortex
```
### Run Model
```bash
# Pull and start a model
cortex run <model_id>
```
### Chat with Model
```bash
# chat with a model
cortex chat <model_id>
```
### Show the Model State 
```bash
# Show a model and cortex system status
cortex ps
```
### Stop Model
```bash
# Stop a model
cortex kill
```
### Pull Model
```bash
# Pull a model
cortex pull <model_id>
```
