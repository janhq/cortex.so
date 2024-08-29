---
title: Cortex Pull
description: Cortex CLI.
slug: "pull"
---

:::warning
- Cortex is still under construction.
- The current release will soon be deprecated in favor of a pure C++ implementation.
- READMEs and documentation may be out of sync as we focus on product development.
:::

# `cortex pull`
:::info
This CLI command calls the following API endpoint:
- [Download Model](/api-reference#tag/models/post/v1/models/{modelId}/pull)
:::
This command downloads models from supported [model repositories](/docs/model-sources).

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
