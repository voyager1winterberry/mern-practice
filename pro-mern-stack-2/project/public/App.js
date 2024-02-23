/*
the transformation of JSX to JavaScript happened at runtime with past
code. this is inefficient. here, the transformation is moved to the 
build state in our development so that a ready-to-use version 
can be deployed.
this App.js file contains pure JavaScript code that is ready to be
deployed to a server.
*/

const element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", null, "Hello World!"));
ReactDOM.render(element, document.getElementById('contents'));