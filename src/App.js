import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {mainRoutes.map(({ url, component }) => {
            return <Route path={url} element={component} key={url}/>;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
