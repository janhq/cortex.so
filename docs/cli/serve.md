---
title: Cortex Serve
description: Cortex serve command.
slug: "serve"
---

:::warning
🚧 Cortex is under construction.
:::

# `cortex serve`

This command runs the API endpoint server for the Cortex back-end.

:::info
This command is compatible with all OpenAI and OpenAI-compatible endpoints.
:::

## Usage

```bash
# Start the API server
cortex serve [options]
# Stop the API server
cortex serve [options] stop
```

## Options

| Option                     | Description                               | Required | Default Value |
|----------------------------|-------------------------------------------|----------|---------------|
| `-a, --address <address>`  | Specify the address to use.                | No      | `localhost`           |
| `-p, --port <port>`        | Define the port to serve the application.  | No      | `1337`           |
| `-d, --detach`             | Run the server in detached mode.           | No       | `false`         |
| `-h, --help`               | Display help information for the command.  | No       | -           |


