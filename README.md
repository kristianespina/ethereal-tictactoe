# Tic Tac Toe

## Installation

### 1. Install the dependencies for the backend

```bash
# in root project directory,
cd backend && npm install
```

### 2. Install the dependencies for the frontend

```bash
# in root project directory,
cd frontend && npm install
```

## Running the servers

Before running the servers, make sure that the following ports are available: **3000**, and **3001** for the frontend and backend respectively.

### 1. Start the backend (REST server)

```bash
# in ./backend
npm start
```

### 2. Start the frontend web server

```bash
# in ./frontend
npm start
```

## Project Structure

The repository is divided into two parts: the _frontend_ and the _backend_. In production setting, this is **NOT** recommended as we typically create separate repositories for the backend and the frontend. However, for this submission, to keep everything in one place, I've deliberately structured it this way.

### Front-end Structure

The frontend `./src` directory contains three (4) folders namely:

- api - contains source files tor the communication with the rest server
- components - contains reusable components
- types - contains the types (for typescript's use)
- node_modules - contains the dependencies

### Back-end Structure

The backend contains two (4) folders namely:

- build - contains the `.js` build files
- types - contains the types (for typescript's use)
- utils - contains the utility functions
- node_modules - contains the dependencies

### Compromises

Due to limited time, the following compromises were done:

- **Real-Time Gameplay through Websockets** - Using websockets, it is possible to implement a realtime gameplay wherein two (2) players playing at different computers play against one another.
- **UI** - The user interface is rather kept simple to save time prototyping
- **Dynamic Board Size** - Changes shall be done to the backend evaluator to support dynamic board size
- **Move Verification** - The board is currently evaluated without verification if the received user input is valid. There are ways to mitigate this such as:
  - Instead of expecting **board state** as input, we may instead expect to receive an **array containing the moves** picked by the uers. In this way, it would be easier to validate the user input.

## Author

Kristian Espina
