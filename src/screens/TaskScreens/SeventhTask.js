import React, { Component } from 'react';
import './TaskScreen.css'
import Command from '../../components/CommandComponent/Command';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import Back from '../../components/BackComponent/Back';


class SecondTask extends Component {
  
    render() { 
        return ( 
            <div className='Container'>
                <Back />
                <h1>Powerful command</h1>
                <p style={{textAlign: 'center'}}>Beside <em>$ git reflog</em> which is a powerful command we have also another one called rebase interactive.<br/>
                   it's different then the normal rebase and normally most people use merge. But now about git rebase interactive.<br/>
                   You can edit commit messages, squash commits, delete, change the order etc. just by using a text editor like vim.
                </p>
                <p>Try it out! Play with the src/ParticipantsDta.js file and change some data, add your knowledge before this training then commit.<br/>
                    After the commit add your new knowledge rate and commit it also. After the second commit play a little bit more and make more changes<br/>
                    and commits so you can see the true power of an interactive rebase. Use command:
                </p>
                <Command command='$ git rebase -i' />
                <p>Also use other commands that you know or have learned throw this training, like git show, reflog etc.</p>
                <NavigationButton label='Next' path='/congrats' />
            </div>
         );
    }
}
 
export default SecondTask;