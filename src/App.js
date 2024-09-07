import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import Homepage from "./pages/Homepage";
import { UserContextProvider } from './context/user.context';
import { DashboardContextProvider } from './context/dashboard.context';

function App() {
  return (
    <UserContextProvider>
    <DashboardContextProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
    </DashboardContextProvider>
  </UserContextProvider>
  );
}

export default App;
