import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import DashBoard from './pages/DashBoard';
import Mypage from './pages/MyPage';
import CreateVmPage from './pages/CreateVmPage';
import { useScreenGuard } from './hooks/ScreenSize';
import NotSupport from './pages/NotSupport';

function App() {
  useScreenGuard(); // 커스텀 훅, 사이즈 작으면 안들어가지게 막음

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/createvm" element={<CreateVmPage />} />
      <Route path="/notsupported" element={<NotSupport />} />
      <Route path="*" element={<NotSupport />} />
    </Routes>
  )
}

export default App
