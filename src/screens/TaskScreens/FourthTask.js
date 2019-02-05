import React, { Component } from 'react';
import './TaskScreen.css'
import Command from '../../components/CommandComponent/Command';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';

class FourthTask extends Component {

    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>Let's continue with our project ...</h1>
                <p>Now when you know all the essential commands we can push our changes on the remote but first we<br/>
                need to stage our changes, commit them with a commit message (use -m "Commit message").</p>
                
                <NavigationButton label='Next' path='/tasks/fifth_task' />
            </div>
         );
    }
}
 
export default FourthTask;