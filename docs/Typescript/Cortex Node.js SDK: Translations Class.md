
  
  # **Translations**

High Level

The `Translations` class is part of the `cortex.audio` module in the Cortex Node.js SDK. It provides a method to translate audio files into English text. This class is already instantiated when you initialize the Cortex SDK.

```javascript
import Cortex from "@janhq/cortex-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "", 
});
```

## Why should I use this function?

The `create` method of the `Translations` class allows you to translate audio files into English text programmatically. This can be useful in various scenarios, such as:

- Transcribing audio recordings (e.g., meetings, interviews, lectures) for accessibility or archiving purposes.
- Extracting textual data from audio sources for analysis or processing.
- Building applications that require audio-to-text conversion capabilities.

## Methods Overview and Code Examples

The `Translations` class has one method:

### `create(body: TranslationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Translation>`

This method sends a POST request to the `/audio/translations` endpoint to initiate an audio translation task.

**Example:**

```javascript
const audioFile = '/path/to/audio/file.mp3';
const params = {
  file: audioFile,
  model: 'whisper-1',
};

cortex.audio.translations.create(params)
  .then(response => {
    console.log(response.text);
  })
  .catch(error => {
    console.error(error);
  });
```

## What are the required parameters?

The `create` method takes two parameters:

1. `body` (required): An object of type `TranslationCreateParams` containing the following properties:
   - `file` (required): The path or URL of the audio file to be translated.
   - `model` (optional): The name of the model to be used for translation. If not provided, a default model will be used.

2. `options` (optional): An object of type `Core.RequestOptions` containing additional options for the request, such as headers or request timeout.

## Prerequisites

Before using the `Translations` class, make sure you have:

- Installed the Cortex Node.js SDK (`@janhq/cortex-node`).
- Initialized the Cortex SDK with your API key and base URL.
- Access to audio files in a supported format (e.g., MP3, WAV, FLAC).

## How do I use this function?

To use the `create` method of the `Translations` class, follow these steps:

1. Import the Cortex SDK and initialize it with your API key and base URL.
2. Prepare the `TranslationCreateParams` object with the path or URL of the audio file you want to translate, and optionally specify the model to be used.
3. Call the `create` method of `cortex.audio.translations` and pass the `TranslationCreateParams` object as the `body` parameter.
4. Handle the returned `Core.APIPromise<Translation>` with a `.then` callback to access the translated text, or a `.catch` callback to handle any errors.

The `create` method returns a Promise that resolves with a `Translation` object containing the translated text. You can access the translated text using the `text` property of the `Translation` object.
  
  