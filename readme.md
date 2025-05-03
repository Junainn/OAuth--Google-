# Google OAuth Practice (Backend API only)

This is a simple Node.js project where I practiced implementing Google OAuth using Passport.js. The app allows users to log in using their Google account. When a user logs in, their information is saved in the database (MongoDB), and sessions are managed using cookies. This project was created for learning purposes only and does not include full authentication features like GitHub OAuth,FaceBook OAuth etc or manual login.

The project includes basic routes for logging in (`/auth/google`), handling the callback (`/auth/google/redirect`), and logging out (`/auth/logout`). After login, the user data is available in the session and can be used throughout the app.
