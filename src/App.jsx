import './App.css'
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/home.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCard from "./components/pages/AddCard.jsx";
import ManageCard from "./components/pages/manageCard.jsx";
import Transactions from "./components/pages/transactions.jsx";
import About from "./components/pages/about.jsx";
import Profile from "./components/pages/profile.jsx";

function App() {

  return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addcard" element={<AddCard />} />
                    <Route path="/managecard" element={<ManageCard />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    {/*<Route path="/login" element={<Login />} />*/}
                    {/*<Route path="/signup" element={<SignUp />} />*/}
                    {/*<Route path="/verify-email" element={<EmailVerification />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
