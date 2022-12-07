import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ExpectedGoals } from "./pages/ExpectedGoals/ExpectedGoals";
import { Navbar } from "./components/Navbar/Navbar";
import { Team } from "./pages/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expected_goals" element={<ExpectedGoals />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
