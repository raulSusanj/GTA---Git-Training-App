import React, { Component } from 'react';
import './TaskScreen.css'
import Command from '../../components/CommandComponent/Command';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';


class SecondTask extends Component {
  
    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>7th task</h1>
                <NavigationButton label='Next' path='/tasks/third_task' />
            </div>
         );
    }
}
 
export default SecondTask;