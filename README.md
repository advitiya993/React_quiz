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

```mermaid
flowchart TB
    U[User]
    STT[Speech to Text]
    RE[Rule Engine]
    LLM[Large Language Model]
    DB[Storage]
    PDF[PDF Generator]
    N[Notification Service]

    U --> STT
    STT --> RE
    RE --> LLM
    LLM --> DB
    DB --> PDF
    PDF --> N

    classDef user fill:#1E88E5,stroke:#0D47A1,stroke-width:2px
    classDef stt fill:#6D4C41,stroke:#3E2723,stroke-width:2px
    classDef rule fill:#F9A825,stroke:#F57F17,stroke-width:2px
    classDef llm fill:#8E24AA,stroke:#4A148C,stroke-width:2px
    classDef storage fill:#2E7D32,stroke:#1B5E20,stroke-width:2px
    classDef pdf fill:#C62828,stroke:#B71C1C,stroke-width:2px
    classDef notify fill:#00695C,stroke:#004D40,stroke-width:2px

    class U user
    class STT stt
    class RE rule
    class LLM llm
    class DB storage
    class PDF pdf
    class N notify



```


