import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';

function Payment() {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate(); 

    const handleClick = () => {
        setIsClicked(true);
        navigate("/paymentsuccess");
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Payment</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type='text' placeholder='user_id' />
                </div>
                <div className='input'>
                    <input type='text' placeholder='password' />
                </div>
                <div className='input'>
                    <input type='text' placeholder='receiver_id' />
                </div>
                <div className='submit-container'>
                    <button className={`Pay${isClicked ? ' clicked' : ''}`
                } onClick={handleClick}>Pay</button>
                </div>
            </div>
        </div>
    );
}

export default Payment;

