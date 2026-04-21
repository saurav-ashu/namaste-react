import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count2: 20,
      userInfo: {
        name: "Default_name",
        location: "Default_location",
      },
    };
    console.log("constructor executes");
    //console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child component Did Mount called");
    console.log("component did mount");
    const data = await fetch("https://api.github.com/users/saurav-ashu");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("set interval called");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    //console.log(this.props.name + "Child render called");

    console.log("render called");
    //const { name, location } = this.props;
    //const { count, count2 } = this.state;

    const { name, location } = this.state.userInfo;
    return (
      <div className="users">
        <div className="user-card">
          {/* <h1>Count: {count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: count + 2,
              });
            }}
          >
            Count Clicker!
          </button>
          <h1>Count2: {count2}</h1> */}
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: 753498724</h4>
        </div>
      </div>
    );
  }
}
export default UserClass;
