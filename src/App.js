import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketList from "./components/TicketList";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import LogsPage from "./pages/LogsPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";
import SLAPage from "./pages/SLAPage";
import TeamsPage from "./pages/TeamsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" exact element={<LandingPage/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/tickets" exact element={<TicketList/>}/>
          <Route path="/users" exact element={<UsersPage/>}/>
          <Route path="/teams" exact element={<TeamsPage/>}/>
          <Route path="/sla" exact element={<SLAPage/>}/>
          <Route path="/logs" exact element={<LogsPage/>}/>
          <Route path="/reports" exact element={<ReportsPage/>}/>
          <Route path="/settings" exact element={<SettingsPage/>}/>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
