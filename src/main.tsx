import "./styles/reset.css";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { StrictMode } from "react";

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element #root not found');
}

const ReactRoot = createRoot(root);

ReactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
