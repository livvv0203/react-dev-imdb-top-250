import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "yellow",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <button style={{ float: "left" }}>Back</button>
        <span>Movie</span>
        <button
          style={{ float: "right" }}
          onClick={() => {
            this.props.eventTab();
          }}
        >
          Profile
        </button>
      </div>
    );
  }
}

export default NavBar;
