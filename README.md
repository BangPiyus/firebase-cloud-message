# Firebase FCM Boilerplate

This is a boilerplate project for setting up Firebase Cloud Messaging (FCM) in a web application.

## Setup Instructions

1. Replace `YOUR_API_KEY`, `YOUR_PROJECT_ID`, `YOUR_SENDER_ID`, and `YOUR_APP_ID` in the configuration files with your Firebase project details.
2. Add your `service-account-file.json` to the `server/` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open `public/index.html` in your browser.
6. Use the `/send-notification` endpoint to send notifications.
