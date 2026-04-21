import User from "./User";
import UserClass from "./UserClass";
import { useEffect } from "react";

const About = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <h2>This is Namaste React tutorial</h2>
      <div className="about-users">
        <div className="functional-comps">
          <h1>Functional comps</h1>
          <User name={"Saurav-function"} />
        </div>
        {/* <div className="class-based-comps">
          <h1>Class based comps</h1>
          <UserClass name={"Saurav-class"} location={"Bangalore-class"} />
        </div> */}
      </div>
    </div>
  );
};
export default About;
