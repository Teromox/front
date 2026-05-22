import { Routes, Route } from 'react-router-dom'
import { MdComputer } from "react-icons/md";
import AuthPage from './pages/AuthPage';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App
