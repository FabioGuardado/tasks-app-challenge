# Tasks App Challenge
This is a tasks management app built with ReactJS that allows the user to visualize, create, update and delete tasks provided by a GraphQL API.

🌐 You can check it out right here: https://fabioguardado.github.io/tasks-app-challenge/

## 🚀 Set-up and Run

To set-up this project in your local environment, follow these steps:

Clone this repository in your local:
```
git clone https://github.com/FabioGuardado/tasks-app-challenge.git
```
Navigate to the folder where you cloned the repository and run the installation command:
```
npm install
```
Then, create a file in the root directory for env variables and name it: `.env.local`. 

Add the following two env variables to your `.env.local` file:
```
VITE_API_URL=<API_URL>
VITE_API_TOKEN=<API_TOKEN>
```

You can also modify the `.env.template` file which already contains the name of the necessary variables.

Finally, run the execution command:
```
npm run dev
```

And you will be able to use the application with the browser in `http://localhost:5173/tasks-app-challenge`.

##  👨‍💻 Tech Stack
The application is built over [Vite](https://vitejs.dev/guide/), the most reliable and convenient solution to create applications based in (but not limited to) [ReactJS](https://react.dev/).

It implements [React Router v6](https://reactrouter.com/en/main/start/overview) to provide client-side routing in this Single Page Application.

About styles, this application has been styled using [SASS](https://sass-lang.com/) as it provides cool features that extend CSS capabilities and developer experience.

It uses [Iconify](https://iconify.design/) to get open source svg icons with the possibility to choose different styles between different icon packs. Iconify provides an API fully integrated with React to load icons data on demand without including a large package of unnecessary icons in your build.

Since the application is querying data from a GraphQL API, it uses [Apollo Client](https://www.apollographql.com/docs/react) to manage the different queries and mutations as it provides a simple way to interact with the API through built-in integration with React. 

As part of the development process and its good practices, this project includes [ESLint](https://eslint.org/) along with [Prettier](https://prettier.io/) pre-configured with the [airbnb's set of rules](https://www.npmjs.com/package/eslint-config-airbnb) to encourage a standarized way to write code, and a common format across different development evironments.

The application is deployed to GitHub Pages using GitHub Actions to define a simple deployment strategy that builds the project and publish the resources on every push to main branch.

A GitHub Flow has been implemented in this repository, considering its agility and prioritizing rapid releases.

