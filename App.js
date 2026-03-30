const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "Hello world from REACT.",
);

const heading2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm heading h1."),
    React.createElement("h2", {}, "I'm heading h2."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm heading h1."),
    React.createElement("h2", {}, "I'm heading h2."),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);
