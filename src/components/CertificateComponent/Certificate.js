import React, { Component } from 'react';
import './Certificate.css';
import { Clear } from '@material-ui/icons';

class Certificate extends Component {
    render() {
        return (
            <div className='Modal'>
                <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                    <div>
                        <Clear style={{position: 'absolute', right: '0'}} onClick={this.props.close}/>
                        <p className='Certificate'>Certificate</p>
                        <div style={{backgroundColor: '#FCF0BD'}}>
                            <p style={{ fontSize: '40px' }}>{this.props.fullName}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <p>FOR COMPLETING GIT TRAINING</p>
                        </div>
                        <img 
                            src={require('../../assets/certficate.png')} 
                            alt='Certificate stamp' 
                            style={{position: 'absolute', top: '1', bottom: '0', right: '0', left: '1', width: '100px', height: '100px'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificate;


