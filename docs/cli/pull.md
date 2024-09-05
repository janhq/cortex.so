---
title: Cortex Pull
description: Cortex CLI.
slug: "pull"
---

:::warning
🚧 Cortex is currently under development. Our documentation outlines the intended behavior of Cortex, which may not yet be fully implemented in the codebase.
:::

# `cortex pull`
:::info
This CLI command calls the following API endpoint:
- [Download Model](/api-reference#tag/models/post/v1/models/{modelId}/pull)
:::
This command downloads models from supported [model repositories](/docs/model-sources).

The downloaded model will be stored in the Cortex folder in your home data directory.


## Usage

```bash
cortex pull [options] <model_id> 
```

## Options

| Option         | Description                                       | Required | Default value | Example     |
| -------------- | ------------------------------------------------- | -------- | ------------- | ----------- |
| `model_id`     | The identifier of the model you want to download. | Yes      | -             | `mistral` |
| `-h`, `--help` | Display help information for the command.         | No       | -             | `-h`        |
