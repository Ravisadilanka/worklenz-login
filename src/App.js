import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reset_Password from './pages/Reset_Password';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/reset-password" element={<Reset_Password />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
