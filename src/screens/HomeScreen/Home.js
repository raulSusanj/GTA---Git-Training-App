import React, { Component } from 'react';
import './Home.css';
import NavigationButton from '../../components/NavigationButton/NavigationButton';


class Home extends Component {
  render() {
    return (
      <div className='Home'>
          <div className='Home-content'>
            <img 
            src={require('../../assets/logoGit.png')} 
            alt='Git Logo'
            width={600}
            />
            <br/>
            <p className='Main-paragraph'>
                This is an educational app for learning git fundamentals. 
                You will learn necessary git commands and concepts.
            </p>
            <NavigationButton label='START' path='/tasks/first_task' />
          </div>
      </div>
    );
  }
}


export default Home;
