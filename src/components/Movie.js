import React, { Component } from "react";
import axios from "axios";
// import { DataModel } from "../data/data";

class Movie extends Component {
  list;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      /**
       * @type {DataModel[]}
       */
      list: [],
      // backupList: [],
      inputText: " ",
    };
  }

  componentDidMount() {
    // Fetch Data
    // axios.get("address").then(res => {}).catch(err=> console.log(err));

    const options = {
      method: "GET",
      url: "https://imdb-api.com/en/API/Top250Movies/k_rxpp9e9o",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data.items);
        this.setState({
          isLoading: false,
          list: response.data.items,
          // backupList: response.data.items,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>IMDB TOP 250</h2>
        <input
          value={this.state.inputText}
          onChange={(evt) => {
            this.setState({ inputText: evt.target.value });
          }}
        ></input>
        <br></br>

        {this.getMovieList().map((item) => (
          <dl key={item.id}>
            <dt>
              {item.rank} -----
              {item.fullTitle}
            </dt>
            <dd>{item.imDbRating}</dd>
          </dl>
        ))}
      </div>
    );
  }

  getMovieList() {
    return this.state.list.filter((item) =>
      item.fullTitle.toUpperCase().includes(this.state.inputText.toUpperCase())
    );
  }

  // handleInput = (event) => {
  //   console.log("input", event.target.value);
  //   // Filter contents to a new list
  //   var newList = this.state.backupList.filter((item) =>
  //     item.fullTitle.toUpperCase().includes(event.target.value.toUpperCase())
  //   );

  //   console.log(newList);

  //   this.setState({
  //     list: newList,
  //   });
  // };
}

export default Movie;
