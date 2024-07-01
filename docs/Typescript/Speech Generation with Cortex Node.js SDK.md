
  
  # **Speech Generation**

High Level

The `Speech` class is part of the `cortex.audio` module in the Cortex Node.js SDK. It provides functionality to generate audio from text input. The `Speech` class extends the `APIResource` class, which is a base class for all resource classes in the SDK.

## Why should I use this function?

The `Speech` class allows you to leverage the speech synthesis capabilities of the Cortex API. It enables you to generate audio files from text input, which can be useful in various scenarios, such as:

- Creating audio narrations or spoken content for websites, applications, or multimedia projects.
- Generating audio instructions or announcements for interactive voice response (IVR) systems or virtual assistants.
- Converting text-based content into audio format for accessibility purposes or for users who prefer listening over reading.

## Methods Overview and Code Examples

The `Speech` class currently has one method:

### `create(body, options)`

This method generates audio from the provided text input.

**Example:**

```javascript
import Cortex from "@janhq/cortexso-node";

const cortex = new Cortex({
  baseURL: "http://localhost:1337/v1",
  apiKey: "your_api_key_here",
});

const speechParams = {
  text: "Hello, this is an example text for speech synthesis.",
  voice_id: "default",
  output_format: "mp3",
};

cortex.audio.speech
  .create(speechParams)
  .then((response) => {
    // Response will contain the generated audio data
    const audioData = response.data;
    // You can save the audio data to a file or process it further
  })
  .catch((error) => {
    console.error("Error generating speech:", error);
  });
```

## What are the parameters or arguments required?

The `create` method accepts two arguments:

1. `body` (required): An object containing the parameters for the speech synthesis request. It should have the following properties:
   - `text` (string): The text to be converted into speech.
   - `voice_id` (string): The ID of the voice to be used for speech synthesis.
   - `output_format` (string): The desired audio format for the generated audio file (e.g., "mp3", "wav").

2. `options` (optional): An object containing additional options for the request, such as headers, query parameters, or other configuration settings.

## Prerequisites

Before using the `Speech` class, make sure you have:

- Installed the Cortex Node.js SDK by following the installation instructions in the documentation.
- Obtained an API key from the Cortex platform, which is required to authenticate your requests.
- Familiarized yourself with the available voice IDs and output formats supported by the Cortex speech synthesis service.

## How do I use this function?

To use the `Speech` class and generate audio from text, follow these steps:

1. Import the Cortex SDK and create a new instance of the `Cortex` class with your API key and other configuration options.
2. Define the parameters for the speech synthesis request, including the text to be converted, the desired voice ID, and the output audio format.
3. Call the `create` method on the `cortex.audio.speech` instance, passing the speech synthesis parameters and any additional options as arguments.
4. Handle the response from the `create` method, which will contain the generated audio data.
5. Process the audio data as needed, such as saving it to a file or streaming it to the user.

By following these steps, you can leverage the speech synthesis capabilities of the Cortex API and generate audio from text input using the `Speech` class in the Cortex Node.js SDK.
  
  