import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const NavigationButton = (props) => {
    const { label, path } = props;
    return ( 
        <Link 
        to={path} 
        style={{
          color:'#fff', 
          textDecoration:'none'}}>
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
                {label}
        </Button>
        </Link>
     );
}
 
export default NavigationButton;

