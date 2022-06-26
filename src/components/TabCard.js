import React, { Component } from "react";
import Movie from "./Movie";
import Profile from "./Profile";
import Theater from "./Theater";
import TabBar from "./TabBar";
import NavBar from "./NavBar";
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
      }
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
        {/* Rendering Nav Bar */}
        <NavBar
          eventTab={() => {
            this.setState({
              currentTab: 2,
            });
          }}
        />
        {/* Switching options on Tabs */}
        {this.tabSelector()}
        {/* Rendering Tab Bar */}
        <TabBar
          eventTab={(index) => {
            this.setState({
              currentTab: index,
            });
          }}
          currentTab={this.state.currentTab}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default TabCard;
