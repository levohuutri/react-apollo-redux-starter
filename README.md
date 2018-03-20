## Stack  uses
* [React](https://facebook.github.io/react/) for frontend development
* [GraphQL](http://graphql.org/) for backend API
* [Apollo](http://apollostack.com) for backend/frontend data flow management
* [Redux](http://redux.js.org/) for frontend data management. Apollo integrates with Redux.
* [React-router](https://github.com/reactjs/react-router) for clientside routing
* [Aphrodite](https://github.com/Khan/aphrodite) for styling
* [Express](http://expressjs.com/) for the server
* [Webpack](https://webpack.github.io/) for development server + hot reloading clientside stuff
* [Nodemon](https://github.com/remy/nodemon) for hot reloading backend code
* [Rollbar](https://rollbar.com) for production error handling
* [Minilog](https://github.com/mixu/minilog) for client and server logging
* [Node-foreman](https://github.com/strongloop/node-foreman) for running both the Webpack server and Express server
* [ESLint](http://eslint.org/) to keep your Javascript style consistent
* [Babel](https://babeljs.io/) to use the latest Javascript language features

## Other features of this kit
* Automatic asset versioning so that you can aggressively cache your assets in production
* Server side rendering out of the box
* Custom Apollo network interface that lets you add middleware to handle responses from GraphQL. This would be a good place to put any error handling that you want to do globally (e.g. unexpected errors from GraphQL, user authorization or authentication errors, etc.).
* Sane handling of unexpected exceptions

## Making new app with this kit
1. This demo work with Windows
1. Install [Node.js](https://nodejs.org/).
1. Clone this starter kit
1. [Set up an ESLint plugin in your code editor so that you catch coding errors and follow code style guidelines more easily!](https://medium.com/planet-arkency/catch-mistakes-before-you-run-you-javascript-code-6e524c36f0c8#.oboqsse48)
1. [Install the redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) in Chrome to get advanced Redux debugging features.
1. run env.bat to setup enviroment variables
1. `npm install`
1. `npm run dev`
1. Navigate to `http://localhost:3000` to see your app in action.
1. Navigate to `http://localhost:3000/graphiql` to mess around with the GraphQL API.
1. Start making changes by working in the `src` directory