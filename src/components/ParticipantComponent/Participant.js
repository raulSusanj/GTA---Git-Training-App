import React, { Component, Fragment } from "react";
import "./Participant.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Person } from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarRatings from "react-star-ratings";
import Certificate from '../CertificateComponent/Certificate';


class Participant extends Component {
  state = {
    open: false,
    modal: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  toggleModal = () => {
    this.setState(state => ({
      modal: !state.modal
    }));
  };

  render() {
    const { open, modal } = this.state;
    const { fullName, jobTitle, oldExp, newExp } = this.props;
    const toggleModalText = modal ? 'Close' : 'Show Certification'; 
    return (
      <Fragment style={{marginBottom: '20px'}}>
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
                  <p>
                    <strong>Job title:</strong> {jobTitle}
                  </p>
                <p><strong>Before training knowledge about Git:</strong></p>
                <StarRatings
                  rating={oldExp}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
                <p><strong>After training knowledge about Git:</strong></p>
                <StarRatings
                  rating={newExp}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
                <div style={{marginTop: '10px'}}>
                <p onClick={this.toggleModal}>{toggleModalText}</p>
                </div>
                {modal && <Certificate fullName={fullName} close={this.toggleModal}/>}
              </div>
            </ListItem>
          </List>
        </Collapse>
      </Fragment>
    );
  }
}

export default Participant;
