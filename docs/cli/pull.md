---
title: Cortex Pull
description: Cortex CLI.
slug: "pull"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex pull`
:::info
This CLI command calls the following API endpoint:
- [Download Model](/api-reference#tag/models/post/v1/models/{modelId}/pull)
:::
This command downloads models from supported [model repositories](/docs/model-repositories).

The downloaded model will be stored in the Cortex folder in your home data directory.



## Alias

The following alias is also available for downloading models:

- `cortex download _`

## Usage

```bash
cortex pull <model_id>
```

## Options

| Option         | Description                                       | Required | Default value | Example     |
| -------------- | ------------------------------------------------- | -------- | ------------- | ----------- |
| `model_id`     | The identifier of the model you want to download. | Yes      | -             | `mistral` |
| `-h`, `--help` | Display help information for the command.         | No       | -             | `-h`        |
