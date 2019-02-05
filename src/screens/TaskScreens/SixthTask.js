import React, { Component } from 'react';
import './TaskScreen.css'
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';

class SixthTask extends Component {

    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>SHOW / LOG / REFLOG / STATUS</h1>
                <NavigationButton label='Next' path='/tasks/fifth_task' />
            </div>
         );
    }
}
 
export default SixthTask;