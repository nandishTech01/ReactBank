import './App.css'
import Nav from './components/shared/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome'
import Dashboard from './components/dashboard/dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
    </Router>
    </>
  )
}

export default App
