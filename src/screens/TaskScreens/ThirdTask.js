import React, { Component } from "react";
import { Autorenew } from '@material-ui/icons';
import "./TaskScreen.css";
import Back from "../../components/BackComponent/Back";
import NavigationButton from '../../components/NavigationButton/NavigationButton';

class ThirdTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stages: [
        {
          name: "stash",
          color: "#58ce5e",
          active: false
        },
        {
          name: "workspace",
          note: "unstaged",
          color: "#fc7676",
          active: true,
          stashedFrom: false
        },
        {
          name: "index",
          note: "staged",
          color: "#76acfc",
          active: false,
          stashedFrom: false
        },
        {
          name: "repository",
          color: "#ffb649",
          active: false
        }
      ],
      inputCommand: null
    };
  }

  executeCommand = () => {
    const { inputCommand, stages } = this.state;
    switch (inputCommand) {
      case "git add":
        if (stages[1].active) {
          this.setState(state => {
            const stages = [...state.stages];
            stages[2] = { ...stages[2], active: !state.stages[2].active };
            return { stages };
          });
        }
        break;
      case "git commit":
        if (stages[2].active) {
          this.setState(state => {
            const stages = [...state.stages];
            stages[3] = { ...stages[3], active: !state.stages[3].active };
            return { stages };
          });
        }
        break;
      case "git stash":
        if (stages[1].active || stages[2].active) {
          this.setState(state => {
            const stages = [...state.stages];
            stages[0] = { ...stages[0], active: !state.stages[0].active };
            if (stages[1].active) {
              stages[1] = { ...stages[1], active: !state.stages[1].active };
              stages[1] = { ...stages[1], stashedFrom: !state.stages[1].stashedFrom };
            }
            if (stages[2].active) {
              stages[2] = { ...stages[2], active: !state.stages[2].active };
              stages[2] = { ...stages[2], stashedFrom: !state.stages[2].stashedFrom };
            }
            return { stages };
          });
        }
        break;
      case "git stash pop":
      if (stages[0].active) {
        this.setState(state => {
          const stages = [...state.stages];
          stages[0] = { ...stages[0], active: !state.stages[0].active };
          if (stages[1].stashedFrom) {
            stages[1] = { ...stages[1], active: !state.stages[1].active };
            stages[1] = { ...stages[1], stashedFrom: !state.stages[1].stashedFrom };
          }
          if (stages[2].stashedFrom) {
            stages[2] = { ...stages[2], active: !state.stages[2].active };
            stages[2] = { ...stages[2], stashedFrom: !state.stages[2].stashedFrom };
          }
          return { stages };
        });
      }
      break;
      case "git reset":
      case "git reset --mixed":
      if (stages[2].active) {
        this.setState(state => {
          const stages = [...state.stages];
          stages[2] = { ...stages[2], active: !state.stages[2].active };
          return { stages };
        });
      }
      break;
      case "git reset --soft":
      if (stages[3].active) {
        this.setState(state => {
          const stages = [...state.stages];
          stages[3] = { ...stages[3], active: !state.stages[3].active };
          return { stages };
        });
      }
      break;
      case "git reset --hard":
      if (stages[3].active) {
        this.setState(state => {
          const stages = [...state.stages];
          stages[1] = { ...stages[1], active: !state.stages[1].active };
          stages[2] = { ...stages[2], active: !state.stages[2].active };
          stages[3] = { ...stages[3], active: !state.stages[3].active };
          return { stages };
        });
      }
      break;
      case "git push":
      if (stages[3].active) {
        this.setState(state => {
          const stages = [...state.stages];
          stages[1] = { ...stages[1], active: false };
          stages[2] = { ...stages[2], active: false };
          stages[3] = { ...stages[3], active: false };
          return { stages };
        });
      }
      break;
      default:
        break;
    }
  };

  resetAll = () => {
    this.setState(state => {
      const stages = [...state.stages];
      stages[0] = { ...stages[0], active: false };
      stages[1] = { ...stages[1], active: true };
      stages[2] = { ...stages[2], active: false };
      stages[3] = { ...stages[3], active: false };
      return { stages };
    });
  }

  handleChange = e => {
    this.setState({ inputCommand: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.executeCommand();
  };

  render() {
    return (
      <div className="Container">
      <Back />
        <h1>How does it work?</h1>
        <p style={{ textAlign: "center" }}>
          Every commit can be changed, reverted but never deleted. Git always
          makes a copy of your commit.
          <br />
          We have 4 stages in git. It's important to understand which command
          refers to which stage and what it does.
        </p>
        <h3>THE 4 STAGES</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            name="commandInput"
            placeholder="Enter Git command..."
            className="Command-input"
          />
          <input type="submit" value="Execute" className="Submit-button" />
        </form>

        <div className="Stages-container">
          {this.state.stages.map(stage => (
            <div
              key={stage.name}
              className="Stage"
              style={{ backgroundColor: `${stage.color}` }}
            >
              <p style={{ fontWeight: "bold" }}>{stage.name.toUpperCase()}</p>
              {stage.note && <p>({stage.note})</p>}
              {stage.active && (
                <div style={{ backgroundColor: "#fff" }}>
                  <p style={{ color: "#4c4b4b" }}>index.js</p>
                </div>
              )}
            </div>
          ))}
          <div onClick={this.resetAll}>
          <Autorenew style={{color: '#fff'}} />
          </div>
        </div>
        <NavigationButton label='Next' path='/tasks/fourth_task' />
      </div>
    );
  }
}

export default ThirdTask;
