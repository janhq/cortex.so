
  
  # **Cortex Audio Transcriptions**

High Level

The `Transcriptions` class is part of the `cortex.audio` module, which provides functionality for transcribing audio data into text using the Anthropic API. This class is exported from the Cortex Node.js SDK and can be initialized as follows:

```javascript
import Cortex from "@janhq/cortexso-node";
const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key",
});
const transcriptions = cortex.audio.transcriptions;
```

## Why should I use this function?

The `Transcriptions` class allows you to transcribe audio data into text programmatically, making it easier to integrate audio transcription capabilities into your applications. This can be useful in various scenarios, such as:

- Transcribing recorded meetings, lectures, or podcasts
- Converting audio data to text for analysis or archiving purposes
- Building speech-to-text functionality into your applications

## Methods Overview and Code Examples

The `Transcriptions` class currently provides one method: `create`.

### `create(body, options)`

This method sends an audio file to the Anthropic API for transcription and returns the transcribed text.

**Parameters**:

- `body` (required): An object containing the parameters for the transcription request. It should have the following properties:
  - `file`: The audio file to be transcribed (accepted formats: MP3, WAV, FLAC, and others).
  - `model`: The transcription model to use (e.g., "whisper-1").
  - `language`: The language of the audio file (e.g., "en" for English).
- `options` (optional): An object containing additional options for the request, such as headers or query parameters.

**Example**:

```javascript
import fs from 'fs';

const audioFile = fs.readFileSync('path/to/audio.mp3');
const transcriptionParams = {
  file: audioFile,
  model: 'whisper-1',
  language: 'en'
};

cortex.audio.transcriptions.create(transcriptionParams)
  .then(response => {
    console.log(response.data.text); // Transcribed text
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Prerequisites

Before using the `Transcriptions` class, you must:

1. Install the Cortex Node.js SDK by running `npm install @janhq/cortexso-node` or `yarn add @janhq/cortexso-node`.
2. Import the SDK and initialize the `cortex` object with your API key and base URL.
3. Have an audio file ready for transcription, in a supported format (e.g., MP3, WAV, FLAC).

## How do I use this function?

To use the `create` method for transcribing audio data, follow these steps:

1. Import the required dependencies (e.g., `fs` for reading the audio file).
2. Read the audio file into memory or provide a path to the file.
3. Create an object with the necessary parameters for the transcription request:
   - `file`: The audio data or file path.
   - `model`: The transcription model to use.
   - `language`: The language of the audio file.
4. Call the `create` method on the `cortex.audio.transcriptions` object, passing the parameter object and any additional options (if needed).
5. Handle the response from the API, which will contain the transcribed text.

By following these steps, you can easily integrate audio transcription functionality into your Node.js applications using the Cortex SDK.
  
  