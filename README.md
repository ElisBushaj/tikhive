# Tikhive Frontend

Welcome to Tikhive! This is the frontend of Tikhive, a simple React application that allows you to input a TikTok video URL and download the video. Below, you'll find the steps to set up and run this application on your local machine.

## Features

- **Input TikTok Video URL**: Enter the URL of the TikTok video you want to download.
- **Download Video**: Download the video directly to your device.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ElisBushaj/tikhive.git
   cd tikhive
   ```

2. **Install Dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory of the project and add the following environment variable:

   ```plaintext
   REACT_APP_API=your_backend_api_url
   ```

   Replace `your_backend_api_url` with the URL of your backend API.

## Usage

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will create a `build` directory with the production build of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or need further assistance, feel free to contact me at elisbushaj2@gmail.com.

---

Thank you for using Tikhive! Happy downloading!
