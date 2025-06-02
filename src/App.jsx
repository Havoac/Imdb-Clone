import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return <>
  <div className="App">
    <Router>
        <Header></Header>
      <Routes>
        <Route index element={ <Home> </Home> } ></Route>
        <Route index element={<h1>Hello</h1>}></Route>
        <Route path="/movie/:id" element={<h1>Movie Id</h1>}></Route>
        <Route path="/movies/:type" element={<h1>Movie Type</h1>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </Router>
  </div>
  </>;
}

export default App;
