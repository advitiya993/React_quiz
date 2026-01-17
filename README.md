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
    UC[User Channels<br/>Voice | SMS | WhatsApp]
    MCP[Agent Orchestration Layer (MCP)]
    TL[Tool Layer]
    SL[Storage & Audit Layer]

    UC --> MCP
    MCP --> TL
    TL --> SL

    classDef channels fill:#1565C0,stroke:#0D47A1,stroke-width:2px
    classDef mcp fill:#2E7D32,stroke:#1B5E20,stroke-width:2px
    classDef tools fill:#F9A825,stroke:#F57F17,stroke-width:2px
    classDef storage fill:#6A1B9A,stroke:#4A148C,stroke-width:2px

    class UC channels
    class MCP mcp
    class TL tools
    class SL storage





```


