---
title: Telemetry
description: Telemetry Architecture
slug: "telemetry"
---

## Architecture
![cortex-architecture.png](/img/docs/telemetry-architecture.png)

## Implementation
- Crash report
    - Catch error:
        - CLI Application
            - Add a global error handler that catch any unexpected error
            - Catch the `uncaughtException` and `unhandledRejection` event from process
            - Catch 500 error from Cortex CPP
        - API Server:
            - Add a global error handler that catch any unexpected error
            - Catch the `uncaughtException` and `unhandledRejection` event from process
            - Catch 500 error from Cortex CPP
            - Folk a child process that interval ping to main process to check if the main process is hang
                ![catch-crash.png](/img/docs/catch-crash.png)
                    
- Configuring Telemetry Settings:
    - Disable by set environment variables
        - `CORTEX_CRASH_REPORT=0`
    - Export the Telemetry to OpenTelemetry Collector:
        - `OTEL_EXPORTER_OTLP_ENDPOINT=<endpoint>`

- Commands:
    - Show all crash reports:
        - `cortex telemetry --type crash`

## Type of Telemetry

CrashReportResource
- `osName` : name of the os
- `osVersion`: version of the os
- `architecture`: architecture of the os
- `appVersion`: version of cortex
- `service.name`: name of cortex service
- `source`: `cli` or `cortex-server` or `cortex-cpp`
- `cpu` : model of cpu
- `gpus`: model of gpu, vendor, vram, vramDynamic

CrashReportPayload
- `modelId` : model id that currently use
- `endpoint`: the endpoint of Cortex Server
- `command`: the command of Cortex CLI

Crash Report Schema:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "StringValue": {
      "type": "object",
      "properties": {
        "stringValue": {
          "type": "string"
        }
      },
      "required": ["stringValue"]
    },
    "ObjectValue": {
      "type": "object",
      "properties": {
        "kvlist_value": {
          "type": "object",
          "properties": {
            "values": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "key": {
                    "type": "string"
                  },
                  "value": {
                    "$ref": "#/definitions/StringValue"
                  }
                },
                "required": ["key", "value"]
              }
            }
          },
          "required": ["values"]
        }
      },
      "required": ["kvlist_value"]
    },
    "Attribute": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string"
        },
        "value": {
          "oneOf": [
            { "$ref": "#/definitions/StringValue" },
            { "$ref": "#/definitions/ObjectValue" }
          ]
        }
      },
      "required": ["key", "value"]
    },
    "TelemetryLog": {
      "type": "object",
      "properties": {
        "traceId": {
          "type": "string"
        },
        "startTimeUnixNano": {
          "type": "string"
        },
        "endTimeUnixNano": {
          "type": "string"
        },
        "severityText": {
          "type": "string"
        },
        "body": {
          "type": "object",
          "properties": {
            "stringValue": {
              "type": "string"
            }
          },
          "required": ["stringValue"]
        },
        "attributes": {
          "type": "array",
          "items": { "$ref": "#/definitions/Attribute" }
        }
      },
      "required": ["traceId", "severityText", "body", "attributes"]
    },
    "ScopeLog": {
      "type": "object",
      "properties": {
        "scope": {
          "type": "object"
        },
        "logRecords": {
          "type": "array",
          "items": { "$ref": "#/definitions/TelemetryLog" }
        }
      },
      "required": ["scope", "logRecords"]
    },
    "Resource": {
      "type": "object",
      "properties": {
        "attributes": {
          "type": "array",
          "items": { "$ref": "#/definitions/Attribute" }
        }
      },
      "required": ["attributes"]
    },
    "TelemetryEvent": {
      "type": "object",
      "properties": {
        "resource": { "$ref": "#/definitions/Resource" },
        "scopeLogs": {
          "type": "array",
          "items": { "$ref": "#/definitions/ScopeLog" }
        }
      },
      "required": ["resource", "scopeLogs"]
    }
  },
  "type": "object",
  "properties": {
    "resourceLogs": {
      "type": "array",
      "items": { "$ref": "#/definitions/TelemetryEvent" }
    }
  },
  "required": ["resourceLogs"]
}
```