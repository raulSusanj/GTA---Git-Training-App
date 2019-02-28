import React, { Component } from "react";
import "./TaskScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Back from "../../components/BackComponent/Back";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";

class FirstTask extends Component {
  state = {
    link: "https://nvie.com/posts/a-successful-git-branching-model/"
  };

  render() {
    return (
      <div className="Container">
        <Back />
        <h1>DISTRIBUTION AND BRANCHING MODELS</h1>
        <List style={{ backgroundColor: "#fff", width: "600px" }}>
          <ListItem>
            <ListSubheader>DISTRIBUTION MODELS</ListSubheader>
          </ListItem>
          <ListItem>
            <ListItemText>Peer to Peer model</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Centralized model</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Pull request model</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Dictator and Lieutenants model</ListItemText>
          </ListItem>
          <ListItem>
            <ListSubheader><a href={this.state.link}>GITFLOW BRANCHING MODEL</a></ListSubheader>
          </ListItem>
        </List>
        <NavigationButton label="Next" path="/congrats" />
      </div>
    );
  }
}

export default FirstTask;
