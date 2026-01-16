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
    A([🎤 User Speaks]):::user --> B[[🗣️ Speech-to-Text]]:::media
    B --> C{⚙️ Rule Engine<br/>Decides Next Step}:::logic
    C --> D[[🧠 LLM Paraphrasing<br/>& Clarification]]:::llm
    D --> E[(🗂️ Answer Stored)]:::data
    E --> F[[📄 Form Auto-Populated<br/>PDF Generated]]:::doc
    F --> G([⏰ Reminder Scheduled]):::schedule
    G --> H[[📩 SMS Preview Sent]]:::notify

    classDef user fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px;
    classDef media fill:#E8F5E9,stroke:#43A047,stroke-width:2px;
    classDef logic fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px;
    classDef llm fill:#F3E5F5,stroke:#8E24AA,stroke-width:2px;
    classDef data fill:#ECEFF1,stroke:#546E7A,stroke-width:2px;
    classDef doc fill:#E1F5FE,stroke:#0288D1,stroke-width:2px;
    classDef schedule fill:#FFFDE7,stroke:#F9A825,stroke-width:2px;
    classDef notify fill:#FCE4EC,stroke:#D81B60,stroke-width:2px;


