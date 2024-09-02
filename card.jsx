
import React, { useEffect } from 'react';
import './card.css'; 
import { useNavigate } from 'react-router-dom'; 
 

const Card = () => {
    const navigate = useNavigate(); 
     return (
        <>
            <div className="Card" >
                <p>AI in healthcare</p>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7640807/">click here</a>
            </div>
            <div className="Card" onClick={() => navigate("/Payment")}>
                <button>Pay to hospital</button>
                <p>payment</p>
            </div>
            <div className="Card" >
                <p>govt card</p>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7640807/">click here</a>
            </div>
        </>
    );
}

export default Card;


