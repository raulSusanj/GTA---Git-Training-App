// @flow
import React from 'react';

type Props = {
    fullName: string,
    jobTitle: string,
    age: number

}

const Participant = (props: Props) => {
    return ( 
        <div>
            <h3>Participant Profile</h3>
            <p>Full name: {props.fullName}</p>
            <p>Age: {props.jobTitle}</p>
            <p>Job title: {props.jobTitle}</p>
        </div>
     );
}
 
export default Participant;



