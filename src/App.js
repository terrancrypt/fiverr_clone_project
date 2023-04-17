import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";
import { adminRoutes } from "./routes/adminRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {mainRoutes.map(({ url, component }) => {
            return <Route path={url} element={component} key={url}/>;
          })}
          {adminRoutes.map(({url,component})=>{
            return <Route path={url} element={component}/>
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
