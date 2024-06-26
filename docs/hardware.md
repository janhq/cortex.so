---
title: Hardware Requirements
description: Get started quickly with Jan, a ChatGPT-alternative that runs on your own computer, with a local API server. Learn how to install Jan and select an AI model to start chatting
slug: "/hardware"
---

:::warning
🚧 Cortex is under construction.
:::

To run LLMs on device, Cortex has the following hardware requirements:

:::info
These are the general hardware requirements for running Cortex on your system. Please refer to the respective [installation](/docs/category/installation) sections for detailed specifications tailored to each environment.
:::

## OS

- MacOSX 13.6 or higher.
- Windows 10 or higher.
- Ubuntu 12.04 and later.

## CPU
- Mac:
    - Support Intel and Mac Apple Silicon CPUs.
- Windows & Linux:
    - Haswell processors (Q2 2013) and newer.
    - Tiger Lake (Q3 2020) and newer for Celeron and Pentium processors.
:::info
Cortex supports multiple CPU instructions: AVX, AVX2, and AVX512.
:::
## GPU
- At least 6GB VRAM is recommended when using NVIDIA, AMD, or Intel Arc GPUs.

:::info
Cortex Supports NVIDIA GPU acceleration (Support for other GPUs will come soon!)
:::
## RAM (CPU Mode)

- 8GB for running up to 3B models.
- 16GB for running up to 7B models.
- 32GB for running up to 13B models.

## VRAM (GPU Mode)

- 6GB can load the 3B model (int4) with `ngl` at 120 ~ full speed on CPU/ GPU.
- 8GB can load the 7B model (int4) with `ngl` at 120 ~ full speed on CPU/ GPU.
- 12GB can load the 13B model (int4) with `ngl` at 120 ~ full speed on CPU/ GPU.

## Disk Space

- 10GB: The app is 1.02 MB, but models are usually 4GB+
