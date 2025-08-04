import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MaintenancePopup from './components/MaintenancePopup';

function App() {

  return (
    <>
      <Navbar />
        <Outlet />
        <MaintenancePopup />
      <Footer />
    </>
  )
}

export default App
