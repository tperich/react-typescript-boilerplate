### React Typescript Boilerplate

🚀 React, TypeScript, Redux, Saga, Reselect, SASS, Jest, Axios

## Setting up

1. Clone the repository from https://github.com/tperich/react-typescript-boilerplate
2. Run `yarn install` to install dependencies
3. Run `yarn start` to start the development server

## Running in docker

Make sure you have docker and docker-compose installed!

- To run a development version, simply run: `sudo docker-compose up`

- To run a production version, run: `sudo docker-compose -f docker-compose.prod.yml up`

## Available npm/yarn scripts

| Command         | Explanation                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| `yarn start`    | Starts the development server on localhost:3000                                                              |
| `yarn lint`     | Runs eslint to check all `.ts` and `.tsx` files                                                              |
| `yarn lint:fix` | Same as above but applies auto-fixes                                                                         |
| `yarn test`     | Launches the test runner (jest)                                                                              |
| `yarn build`    | Builds the app for production to the `build` folder                                                          |
| `yarn eject`    | Ejects the application from CRA. **Note: this is a one-way operation. Once you `eject`, you can’t go back!** |

## TO DO

 - [ ] Improve docker compose files (better support for production)
 - [ ] Add support for .env files as a main point of config
 - [ ] Write unit tests with Jest
 - [ ] Write integration tests with Jest
 - [ ] Add .github-actions.yml and Jenkinsfile example files
