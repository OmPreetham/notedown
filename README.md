# MERN Stack Requests Manager

## Frontend (client):

1. Developed using React.js along with Redux for state management.

2. Utilized React Router DOM for client-side routing.

3. Implemented features such as user authentication, note creation, and note management.

4. Designed a user-friendly interface with easy navigation and mobile responsiveness.

## Backend (server):

1. Built on Node.js with Express.js framework to handle server-side logic and routing.

2. Employed MongoDB as the database using Mongoose for object modeling.

3. Implemented user authentication using JSON Web Tokens (JWT) for secure access.

4. Managed user roles (Employees, Managers, Admins) and their respective permissions.

5. Provided APIs for CRUD operations on notes, including assignment to specific users and status tracking.

## Technologies Used

- **Frontend:**

  - React
  - Redux
  - React Router DOM
  - FontAwesome
  - JWT Decode
  - React Spinners
  - Testing Library

- **Backend:**

  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - bcrypt
  - JSON Web Tokens (JWT)
  - Express Rate Limit
  - dotenv

## How to Run

Clone the repository for both client and server.

### Client Folder

1. Navigate to the `client` folder.
2. Install dependencies using `npm install`.
3. Start the client using `npm start`.
4. The client will run on `http://localhost:3000` by default.

### Server Folder

1. Navigate to the `server` folder.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory of the server folder.
4. Inside the `.env` file, define the following environmental variables:

   DATABASE_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret

   Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_access_token_secret` and `your_refresh_token_secret` with 64-bit hex strings.

   ### Generating 64-bit Hex String

   To generate a 64-bit hex string, follow these steps:

   1. Open your terminal or command prompt.

   2. Enter the Node

   3. In CLI type,

   ```javascript
   // Command to generate Access Token and Refresh Token
   require('crypto').randomBytes(64).toString('hex')
   ```

   in a Node.js CLI.

5. Start the server using `npm start` for production or `npm run dev` for development.

6. The server will run on `http://localhost:3500`.

## Features Implemented

- Sticky note system replaced with MERN stack notes application.
- Public-facing page with basic contact information added.
- Employee login functionality implemented.
- Welcome page displayed after login.
- Navigation made easy for users.
- Current user and assigned role displayed.
- Logout option provided.
- Users required to login at least once per week.
- Option to remove employee access immediately if needed.
- Notes can be assigned to specific employees.
- Notes contain ticket number, title, body, creation & update dates, and status.
- Users categorized as Employees, Managers, or Admins.
- Only Managers or Admins can delete notes.
- Anyone can create a note during check-in.
- Employees can only view and edit their assigned notes.
- Managers and Admins have full access to notes.
- User Settings accessible only to Managers and Admins.
- Creation of new users restricted to Managers and Admins.
- Desktop mode prioritized but mobile-friendly design implemented.
