import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const NavigationButton = (props) => {
    const { label, path } = props;
    return ( 
        <Button 
            variant='contained'
            color='primary'
            size='large'
            style={{ 
                backgroundColor: '#EE513B',
                width: '150px',
                fontFamily: 'monospace',
                fontSize: 22,
                fontWeight: 'bold',
                margin: '1em',
                borderRadius: '0'
                }}
        >
            <Link 
                to={path} 
                style={{
                  color:'#fff', 
                  textDecoration:'none'}}>
                {label}
            </Link>

        </Button>
     );
}
 
export default NavigationButton;

