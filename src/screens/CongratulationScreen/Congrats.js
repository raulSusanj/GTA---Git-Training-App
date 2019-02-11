import React from 'react';
import { Link } from "react-router-dom";
import './Congrats.css';
const Congrats = () => {
    return ( 
        <div className='Congrats'>
            <div className='Congrats-content'>
                <h1 style={{color: '#EE513B'}}>CONGRATULATIONS</h1>
                <h4>A Git Master you are now. Your power is now great, but wisely you now use it must!</h4>
                <img src={require('../../assets/yoda.png')} alt='Yoda' />
                <Link to='/participants' style={{fontFamily: 'monospace', textDecoration: 'none', color: '#fff'}}>
                    Go to profile
                </Link>
            </div>
        </div>
     );
}
 
export default Congrats;