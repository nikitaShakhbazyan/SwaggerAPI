import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import NotFound from './pages/NotFound';
import { Details } from './pages/Details';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/main' element={<Main/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/details/:taskId' element={<Details/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
