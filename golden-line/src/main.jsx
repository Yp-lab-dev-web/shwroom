import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"
import ReactGA from "react-ga4"; // 1. Importez le package

// 2. Initialisez avec votre ID Google Analytics (remplacez par votre vrai G-XXXXX)
ReactGA.initialize("G-L9JW6WWSFC");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
             <App />
        </BrowserRouter>
    </StrictMode>
);