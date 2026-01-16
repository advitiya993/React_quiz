# React_quiz

This repository contains a React quiz application bootstrapped with Create React App.

## Usage

Run the development server:

```bash
npm install
npm start
```

Open http://localhost:3000 in your browser to view the app.

## About

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects the configuration (one-way operation).

For more details see the Create React App documentation: https://facebook.github.io/create-react-app/docs/getting-started

flowchart TD
    A[User Speaks] --> B[Speech-to-Text]
    B --> C[Rule Engine<br/>Determines Next Question]
    C --> D[LLM Paraphrasing<br/>and Clarification]
    D --> E[Validated Answer Stored]
    E --> F[Form Auto-Populated<br/>and PDF Generated]
    F --> G[Reminder Scheduled]
    G --> H[SMS Preview Sent]

