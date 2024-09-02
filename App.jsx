import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Hospitalpage from './pages/Hospitalpage.jsx';
import Loginpage from './pages/Loginpage.jsx';
import Paymentdone from './pages/Paymentdone.jsx';
import PaymentFailPage from './pages/paymentfail.jsx';
import PaymentPage from './pages/Payment.jsx';



function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Loginpage />} />
                    <Route path="/login" element={<Loginpage />} />
                    <Route path="/hospitalsystem" element={<Hospitalpage />} />
                    <Route path="/Payment" element={<PaymentPage />} />
                    <Route path="/paymentsuccess" element={<Paymentdone />} />
                    <Route path="/paymentfail" element={<PaymentFailPage />} />
                                
                 

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;



