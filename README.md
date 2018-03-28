# starWarsPeople

Simple node express app that fetches character information from SWAPI (https://swapi.co/people) and renders it to the page using React components.

Deployment instructions

1.In the command line for the root directory run: npm install

2.After all packages have been installed, start the express server from the same directory (react-backend): npm start

3.Change the directory to \people (this is the frontend part of the app) and run: npm install in command line for this directory.

4.After all packages have been installed, start the app from the same directory (\people): npm start

5.Now you can see the 'Star Wars People' app in the browser at the address http://localhost:3000/


Explanation of decisions made and plugins used

1.I chose 'Create React App' because it's quick, simple, safe and official method to create react app.

2.Create React App defaults to port 3000, Express app also defaults to port 3000. To avoid the conflict, Express port is changed to 3001.

3.I used clarity-react-responsive-grid-layout library to create a responsive grid layout.

4.I used Bootstrap library to style my components.

5.Simple jest unit-tests were added for App and Person components.

6.For server side I used swapi-node - this is a helper js library for work with the SWAPI.

7.I decided to use React PropTypes rather than Typescript (or Flow), because, although runtime validation realised in PropTypes isn't as powerful as TS and Flow in general. However, when working with backend api response it's more preferable than the static validation realised in Typescript and Flow.

