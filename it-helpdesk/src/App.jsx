
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tickets from "./pages/Tickets/Tickets";
import Setting from "./pages/Settings/Settings"
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/tickets' element={<Tickets/>}/>
          <Route path='/settings' element={<Setting/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
