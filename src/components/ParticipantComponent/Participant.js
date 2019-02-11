// @flow
import React, { Component, Fragment } from "react";
import "./Participant.css";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Person } from '@material-ui/icons';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarRatings from 'react-star-ratings';


type Props = {
  fullName: string,
  jobTitle: string
};

const a =1;
// const b =2;

class Participant extends Component<Props> {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { open } = this.state;
    const { fullName, jobTitle, oldExp, newExp } = this.props;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
        <ListItemIcon>
            <Person />
          </ListItemIcon>
        <ListItemText inset primary={fullName} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
            <div className="Participant-container">
            <p>
              <strong>Full name:</strong> {fullName}
            </p>
            {jobTitle && (
                <p>
              <strong>Job title:</strong> {jobTitle}
            </p>
            )}
            <p>Before training knowledge about Git:</p>
            <StarRatings
              rating={oldExp}
              starRatedColor="orange"
              numberOfStars={5}
              name='rating'
            />
            <p>After training knowledge about Git:</p>
            <StarRatings
              rating={newExp}
              starRatedColor="orange"
              numberOfStars={5}
              name='rating'
            />
          </div>
            </ListItem>
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default Participant;
