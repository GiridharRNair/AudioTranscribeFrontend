# TalkToText Frontend

This is the frontend repository for the TalkToText project, an advanced audio transcription application that converts spoken words into accurate written text. This README.md file provides an overview of the frontend codebase and instructions on how to set it up and use it.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview

The TalkToText frontend is a React-based web application that allows users to submit audio files for transcription. It provides a user-friendly interface where users can upload audio files in various formats (e.g., .mp3, .wav, .ogg, .mp4, .m4a) and enter their email address for transcription delivery.

Key features of the frontend include:

- File upload functionality.
- Email input for transcription delivery.
- Integration with the backend for transcription processing.
- Real-time toast notifications for success and error messages.

## Installation

To set up the TalkToText frontend locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/GiridharRNair/AudioTranscribeFrontend.git
   ```

2. Change to the project directory:

   ```bash
   cd AudioTranscribeFrontend
   ```

3. Install the project dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory and specify the backend API URL. You can use a sample file like `.env.example` as a template:

   ```env
   VITE_FLASK_BACKEND=https://your-backend-api-url.com
   ```

5. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

The TalkToText frontend should now be running locally at `http://localhost:5173/`.

## Usage

1. Access the TalkToText frontend by opening a web browser and navigating to `http://localhost:5173/` (or the appropriate URL if deployed).

2. You will see the TalkToText landing page with a typewriter animation displaying "TalkToText" and "Try it now!".

3. Fill out the form:
   - Click the "Choose File" button to upload an audio file.
   - Enter your email address in the "Email" field.

4. Click the "Submit" button to initiate the transcription request.

5. Toast notifications will appear to indicate the success or failure of the transcription request.

6. Upon success, expect an email shortly with the transcription results.

## Dependencies

The TalkToText frontend relies on the following major dependencies:

- React: A JavaScript library for building user interfaces.
- react-toastify: A library for displaying toast notifications.
- axios: A promise-based HTTP client for making API requests.
- react-simple-typewriter: A typewriter animation component for React.

You can find the complete list of dependencies in the `package.json` file.

## Contributing

Contributions to the TalkToText frontend are welcome! If you want to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make your changes and ensure that the code passes linting and tests.

3. Create a pull request (PR) to the `main` branch of this repository.

4. Provide a clear and descriptive PR title and description.

5. Your PR will be reviewed, and feedback may be provided. Once approved, your changes will be merged.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.