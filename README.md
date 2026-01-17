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

flowchart TB
    UC[User Channels<br/>Voice | SMS | WhatsApp]
    MCP[Agent Orchestration Layer<br/>(MCP)]
    TL[Tool Layer]
    SL[Storage & Audit Layer]

    UC --> MCP
    MCP --> TL
    TL --> SL

    classDef channels fill:#E1F5FE,stroke:#0277BD,stroke-width:2px
    classDef mcp fill:#E8F5E9,stroke:#1B5E20,stroke-width:2px
    classDef tools fill:#FFFDE7,stroke:#F9A825,stroke-width:2px
    classDef storage fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2px

    class UC channels
    class MCP mcp
    class TL tools
    class SL storage

flowchart LR
    VA[Voice Agent]
    IA[Intent Agent]
    FA[Form Agent]
    DA[Document Agent]
    CA[Compliance Agent]
    AA[Audit Agent]

    classDef agent fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px

    class VA,IA,FA,DA,CA,AA agent
flowchart LR
    VA[Voice Agent] --> IA[Intent Agent]
    IA --> FA[Form Agent]
    FA --> DA[Document Agent]
    DA --> CA[Compliance Agent]
    CA --> AA[Audit Agent]

    classDef voice fill:#E3F2FD,stroke:#1565C0,stroke-width:2px
    classDef intent fill:#FFF3E0,stroke:#EF6C00,stroke-width:2px
    classDef form fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px
    classDef document fill:#FCE4EC,stroke:#AD1457,stroke-width:2px
    classDef compliance fill:#F3E5F5,stroke:#6A1B9A,stroke-width:2px
    classDef audit fill:#E0F2F1,stroke:#00695C,stroke-width:2px

    class VA voice
    class IA intent
    class FA form
    class DA document
    class CA compliance
    class AA audit




```


