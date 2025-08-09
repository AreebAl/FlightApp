import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Register from './pages/Auth/Register'
import Main from './pages/Main/Main'
import SelectFlight from './pages/Flights/SelectFlight'
import Booking from './pages/Bookings/Booking'
import SeatBusiness from './pages/Bookings/SeatBusiness'
import SeatEconomy from './pages/Bookings/SeatEconomy'
import Payment from './pages/Checkout/Payment'
import PaymentSuccess from './pages/Checkout/PaymentSuccess'
import BoardingPass from './pages/Bookings/BoardingPass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
        <Route path="/flights/select" element={<SelectFlight />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/seats/business" element={<SeatBusiness />} />
        <Route path="/seats/economy" element={<SeatEconomy />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/boarding-pass" element={<BoardingPass />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


