import React, { Component } from "react";
import "../css/tab-bar.css";

class TabBar extends Component {

  render() {
    return (
      <div>
        {/* Rendering Tabs to bottom of the main page */}
        <ul>
          {this.props.list.map((item, index) => (
            <li
              className={this.props.currentTab === index ? "active" : ""}
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
     // Notify Parent Component index of the selected Tab, then change the state
     this.props.eventTab(index);
  };
}

export default TabBar;
