
  
  # **Audio Resource**

High Level

The `Audio` class is part of the Cortex Node.js SDK and is used to interact with the audio-related functionality provided by the Cortex API. It is a subclass of the `APIResource` class and provides access to three child classes: `Transcriptions`, `Translations`, and `Speech`.

The `Audio` class is already initialized within the Cortex object, which is created like this:

```javascript
import Cortex from "@janhq/cortex-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "",
});
```

After creating the `cortex` instance, you can access the `Audio` class and its child classes through `cortex.audio`.

## Why should I use this class?

The `Audio` class provides a convenient way to interact with the audio-related functionality of the Cortex API, such as transcribing audio files, translating audio, and generating speech from text. By using this class, you can streamline your audio processing tasks and leverage the power of the Cortex API without having to write low-level API calls yourself.

## Methods Overview and Code Examples

The `Audio` class itself does not have any methods, but it exposes three child classes:

1. **Transcriptions**: Used for transcribing audio files into text.
   Example: `const transcription = await cortex.audio.transcriptions.create({ file: 'path/to/audio.mp3' });`

2. **Translations**: Used for translating audio files from one language to another.
   Example: `const translation = await cortex.audio.translations.create({ file: 'path/to/audio.mp3', targetLanguage: 'es' });`

3. **Speech**: Used for generating audio files from text input.
   Example: `const audioBuffer = await cortex.audio.speech.create({ text: 'Hello, world!' });`

Each of these child classes has its own set of methods and parameters, which are documented separately.

## Prerequisites

Before using the `Audio` class and its child classes, make sure you have:

1. Installed the `@janhq/cortex-node` package.
2. Created a Cortex account and obtained an API key.
3. Set up the `baseURL` and `apiKey` correctly when creating the `cortex` instance.

## How do I use this class?

To use the `Audio` class and its child classes, follow these steps:

1. Import the Cortex package and create a new instance with your API key and base URL.
2. Access the `Audio` class through `cortex.audio`.
3. Use the child classes (`Transcriptions`, `Translations`, or `Speech`) and their respective methods to perform audio-related tasks.

For example, to transcribe an audio file:

```javascript
import Cortex from "@janhq/cortex-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key_here",
});

const transcription = await cortex.audio.transcriptions.create({
  file: "path/to/audio.mp3",
});

console.log(transcription.text);
```

This example demonstrates how to use the `Transcriptions` child class to transcribe an audio file into text. Similar approaches can be used for the `Translations` and `Speech` classes, with their respective methods and parameters.
  
  