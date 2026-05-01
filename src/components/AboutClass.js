import React from "react"; // OR import {Component} from "react" and use like: class AboutClass extends Component

import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }

  componentDidMount() {
    //console.log("Parent component Did Mount called");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div className="About">
        <h1>About Class Component</h1>
        <h2>This is Namaste React tutorial</h2>
        <div className="">
          Logged in user: <UserContext.Consumer>{({ loggedInUser }) => <h1 className="font-bold text-lg">{loggedInUser}</h1>}</UserContext.Consumer>
        </div>

        <div className="about-users">
          {/* <div className="functional-comps">
            <h1>Functional comps</h1>
            <User name={"Saurav-function"} />
          </div> */}
          <div className="class-based-comps">
            <h1>Class based comps</h1>
            <UserClass name={"Saurav"} location={"Bangalore-class"} />
            {/* <UserClass name={"Rahul"} location={"Bangalore-class"} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutClass;
