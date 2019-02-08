import React, { Component } from 'react';
import './TaskScreen.css'
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';

class FifthTask extends Component {

    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>REVERT vs RESET</h1>
                <p><em>Revert - </em> makes a copy of a referred commit and all the other commits between the new one and the referred are still there.</p>
                <div style={{backgroundColor: '#fff', padding: '1em'}}>
                <img 
                    src={require('../../assets/revertExample.png')} 
                    alt='Revert Example'
                    width={600}
                    />
                </div>
                <p><em>Reset (--hard) - </em> brings you back to the referred commit or the last workspace after pushing. All commits between are garbage collected.</p>
                <div style={{backgroundColor: '#fff', padding: '1em'}}>
                <img 
                    src={require('../../assets/resetExample.png')} 
                    alt='Revert Example'
                    width={600}
                    />
                </div>
                <NavigationButton label='Next' path='/tasks/sixth_task' />
            </div>
         );
    }
}
 
export default FifthTask;