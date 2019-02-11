import React, { Component } from 'react';
import './TaskScreen.css'
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';
import List from "@material-ui/core/List";
import CommandsList from '../../components/CommandsListComponent';


class SixthTask extends Component {

    state = {
        commands: [
            {
                name: '$ git status',
                desc: 'Displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by Git.'
            },
            {
                name: '$ git show',
                desc: 'Show various types of objects.'
            },
            {
                name: '$ git log',
                desc: 'Shows the commit logs.'
            },
            {
                name: '$ git reflog',
                desc: 'Reference logs, or "reflogs", record when the tips of branches and other references were updated in the local repository. Reflogs are useful in various Git commands, to specify the old value of a reference.'
            }
        ]
    }

    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>STATUS / SHOW / LOG / REFLOG</h1>
                <List style={{backgroundColor: '#fff', width: '600px'}}>
                    {this.state.commands.map(command =>(
                        <CommandsList name={command.name} desc={command.desc} />
                    ))}
                </List>
                <NavigationButton label='Next' path='/tasks/seventh_task' />
            </div>
         );
    }
}
 
export default SixthTask;