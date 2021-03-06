## What's next?

### To do

| Task              | Size |
| ----------------- | ---- |
| User registration | L    |
| User login        | M    |
| User logout       | M    |
| User delete       | M    |

### Completed tasks

| Task                          | Size |
| -------------------------     | ---- |
| Pick a color                  | M    |
| Add color to a collection     | S    |
| Test basic route for backend  | S    |

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependencies

1. http://casesandberg.github.io/react-color/#api-individual
2. https://github.com/casesandberg/react-color
3. https://www.npmjs.com/package/react-color
4. https://www.npmjs.com/package/nodemon automatically restarting the node server when it changes
5. https://www.npmjs.com/package/npm-run-all for running multiple npm scripts at the same time

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs both the node server and react frontend together.
Node js server will run in the development mode on port 3001.
To test just server connection, you can run ```node server --exec nodemon```

### psql
Create local database: ```createdb huelldb```

Connect to local db: ```psql -d huelldb```

To test, copy into psql:
```INSERT INTO users (email)```
```VALUES ('test@test.com');```

### `npm start` -> not needed when running `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
