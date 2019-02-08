import React, { Component, Fragment } from "react";
import "./TaskScreen.css";
import Command from "../../components/CommandComponent/Command";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Back from "../../components/BackComponent/Back";
import { Code } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

class FourthTask extends Component {
  state = {
    showHelp: false,
    hide: true,
    commands: ['$ git add .', '$ git commit --amend']
  };

  render() {
    const { showHelp, hide, commands } = this.state;
    return (
      <div className="Container">
        <Back />
        {!hide && (
          <Code
            style={{
              color: "#fff",
              position: "absolute",
              top: "30px",
              right: "50px"
            }}
            onClick={() => this.setState(state => ({showHelp: !state.showHelp}))}
          />
        )}
        <h1>Let's continue with our project ...</h1>
        {hide ? (
            <Fragment>
                <p style={{ textAlign: "center" }}>
                Now when you know all the essential commands we can push our changes
                on the remote but first we
                <br />
                need to stage our changes, commit them with a commit message (use -m
                "Commit message").
                </p>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    style={{borderRadius: '0'}}
                    onClick={() => this.setState(state => ({hide: !state.hide}))}
                >
                    OK
                </Button>
            </Fragment>
        
        ):(
            <Fragment>
                <p style={{ textAlign: "center" }}>
                Still don't push to the remote. Make a new change and add your job
                title in the ParticipantData.js.
                <br />
                Now add and commit the change but try to squash it with the last
                commit. If you need help click on the code icon in the upper right
                corner.
                </p>
                {showHelp && commands.map(command => <Command command={command} />)}
                <NavigationButton label="Next" path="/tasks/fifth_task" />
            </Fragment>
        )}
      </div>
    );
  }
}

export default FourthTask;
