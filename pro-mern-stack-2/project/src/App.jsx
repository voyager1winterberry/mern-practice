/*
the transformation of JSX to JavaScript happened at runtime with past
code. this is inefficient. here, the transformation is moved to the 
build state in our development so that a ready-to-use version 
can be deployed.
*/
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `Hello, ${c}!`);
const message = helloContinents.join(' ');

const element = (
    <div title="Outer div">
      <h1>{message}</h1>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById('contents'));