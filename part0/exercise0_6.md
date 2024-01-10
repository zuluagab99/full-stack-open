```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {content: "SPA", date: "timeStamp"}
    activate server
    server-->>browser: 201 and {"message" : "note created"}
    deactivate server