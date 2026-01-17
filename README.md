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

flowchart LR
    U[User] --> V[Voice Input]
    V --> A[Agent System]
    A --> O[Output Response]

    classDef user fill:#E3F2FD,stroke:#1565C0,stroke-width:2px
    classDef voice fill:#FFF3E0,stroke:#EF6C00,stroke-width:2px
    classDef agent fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px
    classDef output fill:#FCE4EC,stroke:#AD1457,stroke-width:2px

    class U user
    class V voice
    class A agent
    class O output



```


