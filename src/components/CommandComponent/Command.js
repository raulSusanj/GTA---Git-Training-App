import React from 'react';
import './Command.css';

const Command = (props) => {
    return ( 
        <div className='Command-container'>
            <code className='Command-text'>{props.command}</code>
        </div>
     );
}
 
export default Command;