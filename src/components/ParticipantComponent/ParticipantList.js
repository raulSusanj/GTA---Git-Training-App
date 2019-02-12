import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import Participant from "./Participant";
import { ParticipantsData } from '../../ParticipantsData';
import { Clear } from '@material-ui/icons';
import history from '../../navigator/history';




class ParticipantList extends Component {
  render() {
    return (
      <Fragment>
      <div className='Header-container'>
        <h1 style={{color: '#fff'}}>PARTICIPANT LIST</h1>
        <Clear 
          name='Clear'
          style={{color: '#fff', fontSize: '40px', position: 'absolute', right: '40'}}
          onClick={() => history.goBack()}
        />
      </div>

      <div className="Participant-list-container"> 
      <List>
        { ParticipantsData.map(participant =>(
            <Participant 
              key={participant.fullName}
              fullName={participant.fullName} 
              jobTitle={participant.jobTitle} 
              oldExp={participant.oldExp} 
              newExp={participant.newExp} 
             />
        ))}
      </List>
      </div>
      </Fragment>
     
    );
  }
}

export default ParticipantList;
