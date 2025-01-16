import './App.css'
import Layout from "./components/Layout.jsx";
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx";
import Home from "./components/pages/home.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCard from "./components/pages/addCard.jsx";
import ManageCard from "./components/pages/manageCard.jsx";
import Transactions from "./components/pages/transactions.jsx";
import Profile from "./components/pages/profile.jsx";
import About from "./components/pages/about.jsx";
import Login from "./components/pages/login.jsx";
import SignUp from "./components/pages/signup.jsx";


import ProtectedRoute from './handlers/ProtectedRoute.jsx';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addcard" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
                    <Route path="/managecard" element={<ProtectedRoute><ManageCard /></ProtectedRoute>} />
                    <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/about" element={<About />} />

                    <Route path="/login" element={<Login />} />
                </Route>
                <Route>
                    <Route path="/signup" element={<SignUp />} />
                    {/* <Route path="/verify-email" element={<EmailVerification />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
