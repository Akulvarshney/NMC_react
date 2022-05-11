import React from "react";
import fetchData from "./Api";
import Cards from "./Card/Cards";

class Tracker extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
      </div>
    );
  }
}

export default Tracker;
