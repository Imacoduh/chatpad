import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { loadConfig } from "./utils/config";

loadConfig().then(() => {
    const container = document.getElementById("app");
    const root = ReactDOM.createRoot(container!);
    root.render(<App />);

    const fileUpload = document.getElementById("fileUpload");
    fileUpload.addEventListener("change", handleFileUpload);
});

function handleFileUpload(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files && fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const fileData = e.target?.result;
            sendFileToAIAssistant(fileData);
        };
        reader.readAsText(file);
    }
}

function sendFileToAIAssistant(fileData: any) {
    // Integration code to send the file data to the AI assistant for analysis
    // This function should handle the communication with the AI assistant
}
