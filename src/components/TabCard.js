import React, { Component } from "react";
import Movie from "./Movie";
import Profile from "./Profile";
import Theater from "./Theater";
import "../css/tab-bar.css";

class TabCard extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "Movie",
      },
      {
        id: 2,
        text: "Theater",
      },
      {
        id: 3,
        text: "Profile",
      },
    ],
    currentTab: 0,
  };

  tabSelector() {
    switch (this.state.currentTab) {
      case 0:
        return <Movie></Movie>;

      case 1:
        return <Theater></Theater>;

      case 2:
        return <Profile></Profile>;

      default:
        return null;
    }
  }

  render() {
    return (
      <div>
        {/* Switching options on Tabs */}
        {this.tabSelector()}
        {/* Rendering Tabs to bottom of the main page */}
        <ul>
          {this.state.list.map((item, index) => (
            <li
              className={this.state.currentTab === index ? "active" : ""}
              onClick={() => {
                this.handleClick(index);
              }}
              key={item.id}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // Control tab to switch page options 
  handleClick = (index) => {
    console.log(index);

    this.setState({ currentTab: index });
  };
}

export default TabCard;
















