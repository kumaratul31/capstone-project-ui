import './App.css'
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/home.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddCard from "./components/pages/addCard.jsx";
import ManageCard from "./components/pages/manageCard.jsx";
import About from "./components/pages/about.jsx";
import Login from "./components/pages/login.jsx";
import SignUp from "./components/pages/signup.jsx";
import ProtectedRoute from './handlers/ProtectedRoute.jsx';
import Profile from "./components/pages/profile.jsx";
import TransactionLayout from "./components/pages/transactions/transactionLayout.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route element={<Layout />}>
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/addcard" element={<ProtectedRoute><AddCard /></ProtectedRoute>} />
                    <Route path="/managecard" element={<ProtectedRoute><ManageCard /></ProtectedRoute>} />
                    {/*<Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />*/}
                    <Route path="/transactions" element={<TransactionLayout />} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    {/* <Route path="/verify-email" element={<EmailVerification />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
