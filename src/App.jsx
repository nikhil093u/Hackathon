import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import Hackathons from "./pages/Hackathons";
import Submission from "./pages/Submission";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
