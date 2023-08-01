import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Greeting from "./Greeting";
import TernaryGreeting from "./TernaryGreeting";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Greeting language="English" />
    <TernaryGreeting language="English" />
  </StrictMode>
);
