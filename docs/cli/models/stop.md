---
title: Cortex Models Stop
description: Cortex models subcommands.
---

:::warning
🚧
- Cortex is still under construction.
- The current release will soon be deprecated in favor of a pure C++ implementation.
- READMEs and documentation may be out of sync as we focus on product development.
:::

# `cortex models stop`

This command stops a model defined by a `model_id`.



## Usage

```bash
cortex models stop <model_id>
```
:::info
- This command uses a `model_id` from the model that you have started before.
:::
## Options

| Option                    | Description                                                                 | Required | Default value        | Example                |
|---------------------------|-----------------------------------------------------------------------------|----------|----------------------|------------------------|
| `model_id`                | The identifier of the model you want to stop.                               | Yes      | -                    | `mistral`       |
| `-h`, `--help`            | Display help information for the command.                                   | No       | -                    | `-h`               |



