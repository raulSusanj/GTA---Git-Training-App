import React from 'react';
import history from '../../navigator/history';

const Back = (props) => {
    return ( 
        <div 
        style={{position: 'absolute', left: 50, top: 10}}
        onClick={() => history.goBack()}
        >
            <p style={{fontSize: 20, color:'#fff'}}>BACK</p>
        </div>
     );
}
 
export default Back;