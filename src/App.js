import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
