import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
// reportWebVitals();
