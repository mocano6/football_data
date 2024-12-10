import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import ExpectedGoalsApp from "./pages/ExpectedGoals/ExpectedGoalsApp";
import { BoxEntries } from "./pages/BoxEntries/BoxEntries";
import { Navbar } from "./components/Navbar/Navbar";
import { Team } from "./pages/Team/Team";
import VideoDataPage from "./pages/VideoData/VideoDataPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expected_goals" element={<ExpectedGoalsApp />} />
            <Route path="/box_entries" element={<BoxEntries />} />
            <Route path="/team" element={<Team />} />
            <Route path="/video_data" element={<VideoDataPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
