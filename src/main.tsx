import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { StrictMode } from "react";

const root = document.getElementById('root');
const ReactRoot = createRoot(root);

ReactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;