import React, { Component } from 'react';
import './TaskScreen.css'
import Command from '../../components/CommandComponent/Command';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';

class FirstTask extends Component {

    state = {
       commands: ['$ git clone https://github.com/raulSusanj/GTA---Git-Training-App.git']
    }
  
    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>Prepare yourself!</h1>
                <p>First clone the existing project with command:</p>
                <Command command={this.state.commands[0]} />
                <NavigationButton label='Next' path='/tasks/second_task' />
            </div>
         );
    }
}
 
export default FirstTask;