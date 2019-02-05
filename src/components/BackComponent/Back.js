import React from 'react';
import history from '../../navigator/history';

const Back = (props) => {
    return ( 
        <div 
        style={{position: 'absolute', left: 30, top: 10}}
        onClick={() => history.goBack()}
        >
            <p style={{fontSize: 20, color:'#fff'}}>&lt;&lt; Back</p>
        </div>
     );
}
 
export default Back;