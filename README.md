## testing-mailgun

> Testing mailgun for sending and keeping track of emails.

### Requirements

- NodeJS version 12.16.3 or higher

### Content

- [Installation](#installation)
- [Usage](#usage)
- [client](#client)
- [server](#server)

## Installation

1. Clone this repository.  
`git clone https://github.com/weaponsforge/testing-mailgun/tree/express-server.git`
2. Install the **client** dependencies.  
   - ```
     cd client
     npm install
     ```
   - Create a **.env** file inside the **/client** directory.
      - Copy and paste the content of **.env.example** into this file.
      - Replace the value of `REACT_APP_BASE_API_URL` with your target api url.
3. Install the **server** dependencies.  
   ```
   cd server
   npm install
   ```

## Usage

Start the client and server for development mode.

1. Start the localhost api server.  
   ```
   cd server
   npm run dev
   ```
2. Start the client.
   ```
   cd client
   npm start
   ```

# client

**Directory:** `/client`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the `client` project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

---

# server

**Directory:** `/server`

Local express server for hosting the built client files and running other backend api.\
**Base API url:** http://localhost:3001/api



## Available Scripts

### `npm start`

Run the local express server for production environment. Requires the `/build` output from the client `npm run build` script.

### `npm run dev`

Run the local express server for development environment.

@weaponsforge  
20210414

