// @flow
import React, { Component, Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

class CommandsList extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { open } = this.state;
    const { name, desc } = this.props;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={name} />
          {open ? (
            <ExpandLess style={{ color: "#000" }} />
          ) : (
            <ExpandMore style={{ color: "#000" }} />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <div style={{ textAlign: "center" }}>
                <p
                  style={{ fontSize: "16px", color: "#000", textAlign: "left" }}
                >
                  {desc}
                </p>
              </div>
            </ListItem>
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default CommandsList;
