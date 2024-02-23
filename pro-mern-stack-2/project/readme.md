# Pro-Mern-Stack project

## From the book "Pro Mern Stack" by Vasan Subramanian

### Directories

#### public folder
This directory contains all static files.

#### server folder
This directory contains all backend code.

### Project Structure
Node.js allows us to run JavaScript on the server.
The Express Node.js framework allows us to easily make a web application.
The static middleware serves the contents of ```index.html``` from the public directory. It will still serve this file even if only ```http://localhost:3000/``` is used.

### Running the project
To start the server, type in the following:
```node server.js``` or ```npm start```.
When this is entered, server.js is found and run.
You should then see a message stating that the application has started on port 3000. now, open your browser and enter the following for the url:
```http://localhost:3000/index.html```

#### details about this section
we are building a directory to keep all the JSX files that will be converted to JavaScript. we now install Babel tools for the transformation. in the terminal we type ```npm install --save-dev @babel/core@7 @babel/cli@7```. enter the following to check for success: ```node_modules/.bin/babel --version```. if it shows the babel version it worked. you can also use ```npx babel --version```.

In order to transform JSX, we need a preset. we will use preset-react. install it with: ```npm install --save-dev @babel/preset-react@7```

now we can transform JSX into javascript. the babel command-line takes an input directory with the source files (you can now see why we separate the .jsx file into a directory) and the presets that are applicable and the output directory as options. we want the output to be in the public directory and we want to apply the JSX transform preset, @babel/react: ```npx babel src --presets @babel/react --out-dir public```. Do that in the command line while within the public directory, otherwise it will say 'src does not exist.'

this will output a new file called App.js in the public directory. clicking on it will reveal the contents, the contents being JSX elements converted to React.createElement() calls.

Next, change the reference in index.html.