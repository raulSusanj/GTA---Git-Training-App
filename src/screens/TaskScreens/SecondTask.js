import React, { Component } from 'react';
import './TaskScreen.css'
import Command from '../../components/CommandComponent/Command';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';


class SecondTask extends Component {

    state = {
       commands: ['git checkout -b branchName', 'git branch']
    }
  
    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>Always do your work separate</h1>
                <p>Make your own 'feature' branch with command:</p>
                <Command command={this.state.commands[0]} />
                <p style={{textAlign: 'center'}}>
                   The checkout command is used for switching between
                   multiple branches, but with a -b parameter you are<br/> 
                   creating a new one and initially it's same as the branch we checked out.</p>
                <p>You can check on which branch you are now with:</p>
                <Command command={this.state.commands[1]} />
                <p style={{textAlign: 'center'}}>
                    Now create inside the ./src/participants directory your own directory with your full name as directory name e.g. JoeDoe .<br/>
                    Inside your new directory create a FullName.js file (with your own name) and create a stateless react component and render <br/>
                    just a Participant component with props.
                </p>
                <NavigationButton label='Next' path='/tasks/third_task' />
            </div>
         );
    }
}
 
export default SecondTask;