import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 20,
    };

    console.log(this.props.name + "Child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child component Did Mount called");
  }

  render() {
    console.log(this.props.name + "Child render called");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="users">
        <div className="user-card">
          <h1>Count: {count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: count + 2,
              });
            }}
          >
            Count Clicker!
          </button>
          <h1>Count2: {count2}</h1>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: 753498724</h4>
        </div>
      </div>
    );
  }
}
export default UserClass;
