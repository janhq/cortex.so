---
title: Cortex Serve
description: Cortex serve command.
slug: "serve"
---

:::warning
🚧
- Cortex is still under construction.
- The current release will soon be deprecated in favor of a pure C++ implementation.
- READMEs and documentation may be out of sync as we focus on product development.
:::

# `cortex serve`

This command runs the API endpoint server for the Cortex back-end.



## Usage

```bash
# Start the API server
cortex serve [options]
# Stop the API server
cortex serve [options] stop
```

## Options

| Option                     | Description                               | Required | Default Value | Example                |
|----------------------------|-------------------------------------------|----------|---------------|------------------------|
| `-a`, `--address <address>`  | Specify the address to use.               | No       | `localhost`   | `-a 192.168.1.1`|
| `-p`, `--port <port>`        | Define the port to serve the application. | No       | `1337`        | `-p 8080`          |
| `-d`, `--detach`             | Run the server in detached mode.          | No       | `false`       | `-d`             |
| `-h`, `--help`               | Display help information for the command. | No       | -             | `-h`               |


