import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/about';
import Contact from './pages/Contact';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 import { ToastContainer, toast } from 'react-toastify';
import PreLoader from './components/PreLoader';


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className='mx-4 lg:mx-[10%]'> 
    {loading ? (
        <PreLoader />
      ) : (
        <> 
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      
      </Routes>
      <Footer />
      </>
      )}
    </div>
  )
}

export default App