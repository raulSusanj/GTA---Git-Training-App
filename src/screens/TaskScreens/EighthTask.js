import React, { Component } from 'react';
import './TaskScreen.css'
// import Command from '../../components/CommandComponent/Command';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';
import List from "@material-ui/core/List";
import CommandsList from '../../components/CommandsListComponent';

class EighthTask extends Component {

    state = {
        commands: [
            {
                name: '$ git remote update',
                desc: 'Will update all of your branches set to track remote ones, but not merge any changes in.'
            },
            {
                name: '$ git fetch',
                desc: 'Will update only the branch you`re on, but not merge any changes in. Also there is a flag --all. With -all we are doing the same operations like in git update remote.'
            },
            {
                name: '$ git pull',
                desc: 'Will update and merge any remote changes of the current branch you`re on. This would be the one you use to update a local branch.'
            },
            {
                name: '$ git push',
                desc: ' Will push all your staged commits to the remote branch.'
            }
        ]
    }
  
    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>"GET & POST"</h1>
                <p>A few of the most used commands are for "getting" and "posting" changes.<br/></p>
                <List style={{backgroundColor: '#fff', width: '600px'}}>
                    {this.state.commands.map(command =>(
                        <CommandsList name={command.name} desc={command.desc} />
                    ))}
                </List>
                <NavigationButton label='Next' path='/tasks/ninth_task' />
            </div>
         );
    }
}
 
export default EighthTask;