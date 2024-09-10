---
title: Cortex Models List
description: Cortex models subcommands.
---

:::warning
🚧 Cortex.cpp is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

# `cortex models list`

This command lists all local and remote models.



## Usage

```bash
cortex models list [options]
```
For example, it returns the following:
```bash
┌─────────┬───────────────────────────────────────────────┬──────────────────────────────┬───────────┐
│ (index) │ id                                            │ engine                       │ version   │
├─────────┼───────────────────────────────────────────────┼──────────────────────────────┼───────────┤
│ 0       │ 'gpt-3.5-turbo'                               │ 'openai'                     │ 1         │
│ 1       │ 'gpt-4o'                                      │ 'openai'                     │ 1         │
│ 2       │ 'llama3:onnx'                                 │ 'cortex.onnx'                │ 1         │
│ 3       │ 'llama3'                                      │ 'cortex.llamacpp'            │ undefined │
│ 4       │ 'openhermes-2.5:tensorrt-llm-windows-ada'     │ 'cortex.tensorrt-llm'        │ 1         │
│ 5       │ 'openhermes-2.5:tensorrt-llm'                 │ 'cortex.tensorrt-llm'        │ 1         │
│ 6       │ 'tinyllama'                                   │ 'cortex.llamacpp'            │ undefined │
└─────────┴───────────────────────────────────────────────┴──────────────────────────────┴───────────┘

```

## Options

| Option                    | Description                                        | Required | Default value | Example              |
|---------------------------|----------------------------------------------------|----------|---------------|----------------------|
| `-f`, `--format <format>` | Specify output format for the models list.         | No       | `json`        | `-f json`       |
| `-h`, `--help`            | Display help for command.                          | No       | -             | `-h`             |


