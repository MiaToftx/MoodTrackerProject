# MoodTracker Application Documentation

## Project Overview

Welcome to MoodTracker, your emotional companion. This app is all about helping you stay connected to your feelings, keep an eye on stress levels, and cherish the little positives that life brings. Think of it as your personal emotion assistant, guiding you toward a better understanding of your emotional well-being.

## Technologies Used

### Backend

- **IDE:** Intellij IDEA
- **Languages:** Java
- **Frameworks:** Spring Boot, Spring Framework
- **Database:** MongoDB Compass, MongoDB Atlas

### Frontend

- **IDE:** Visual Studio Code (VSCode)
- **Languages:** React, JavaScript, CSS
- **UI Framework:** Bootstrap
- **Dependencies:** Node.js, npm, Axios HTTP, react-router-dom

## Repository Structure

```
Repository
├── Backend
│   ├── Backend project files and folders
├── Frontend
│   ├── Frontend project files and folders
├── README.md
├── .gitignore
└── ...
```

## Backend

The backend of the MoodTracker application is responsible for creating an API that enables users to access, update, and create data in the database. The following API endpoints are available:

- **GET /allMoods:** Retrieve all mood submissions for a specific user.
- **POST /:** Submit a new mood entry along with the associated user.
- **GET /:** Retrieve all good thing submissions for a specific user.
- **POST /:** Submit a new good thing entry along with the associated user.
- **GET /:** Retrieve all stress submissions for a specific user.
- **POST /:** Submit a new stress level entry along with the associated user.
- **POST /register:** Register a new user with a unique username and password.
- **POST /login:** Log in a user with the provided username and password.

## Frontend

The frontend of the MoodTracker application serves to display user-specific data, including mood, stress levels, and positive experiences. The application is composed of the following views:

- **Home Page:** Displays user data and enables the submission of new data entries.
- **Login Page:** Allows users to log in to their accounts.
- **Register Page:** Facilitates the registration of new users.

Communication between the frontend and backend is achieved through relevant API endpoints.

## Installation Instructions

1. Install **Visual Studio Code (VSCode)** and **Intellij IDEA** on your machine.
2. Clone the GitHub project repository to your local machine.
3. Open the frontend in **VSCode** and the backend in **Intellij IDEA**.
4. In the VSCode terminal, execute the command `npm install react-scripts` to install required dependencies.
5. Run the `MoodTrackerProjectApplication` class in **Intellij IDEA** to start the backend.
6. In the VSCode terminal, run the frontend using the command `npm start`. Wait for the application to load in your browser.
7. Register a new user and interact with the home page to submit mood, stress level, and positive experience data.

## Usage

- On the home page, click the mood buttons to submit your current mood.
- Use the stress buttons to submit your stress level.
- Submit positive experiences that you've encountered.

## Troubleshooting

Please note that the login functionality is a work in progress. If you manually refresh the webpage, you may be logged out, and data will not be visible. Utilize the login functionality to rectify this situation.

## Contact Information

For any inquiries or assistance, please feel free to reach out via email:

- mia.toft70@gmail.com
