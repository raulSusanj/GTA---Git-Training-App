import React, { Component } from 'react';
import Participant from '../components/ParticipantComponent/Participant';

class RaulSusanj extends Component {
    render() { 
        return ( 
            <Participant 
                fullName='Raul Sušanj Samolov' 
                age={23} 
                jobTitle='Mobile developer'
            />
         );
    }
}
 
export default RaulSusanj;