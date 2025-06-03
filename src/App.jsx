import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/MovieDetail/Movie";
import MovieList from "./components/MovieList/MovieList";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/movie/:id" element={<Movie />}></Route>
            <Route path="/movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
