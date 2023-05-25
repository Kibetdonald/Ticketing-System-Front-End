import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" exact element={<LandingPage/>}/>
        <Route path="/dashboard" exact element={<Dashboard/>} />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
