import './App.css'
import Nav from './components/shared/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/dashboard/Dashboard';
import UpdateWallet from './components/dashboard/dashboardoperations/UpdateWallet';
import Transaction from './components/transactions/transaction';
import AddTransaction from './components/transactions/transactionoperations/AddTransaction';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import UpdateTransaction  from './components/transactions/transactionoperations/UpdateTransaction';



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
            <Route path='/updatewallet/:id' element={<UpdateWallet />} />
            <Route path='/transactions/:id' element={<Transaction />} />
            <Route path='/trns/add/:id' element={<AddTransaction />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/updateTransaction/:walletid/:id' element={<UpdateTransaction />} />
            






            <Route path='*' element={<NotFound />} />


          </Routes>
    </Router>
    </Provider>
    </>
  )
}

export default App
