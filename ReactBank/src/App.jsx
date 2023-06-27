import './App.css'
import Nav from './components/shared/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome'
import Dashboard from './components/dashboard/dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux';
import store from './store';



function App() {

  return (
    <>
    <Provider store={store}>
    <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/createwallet' element={<CreateWallet />} />
            <Route path='*' element={<NotFound />} />


          </Routes>
    </Router>
    </Provider>
    </>
  )
}

export default App
