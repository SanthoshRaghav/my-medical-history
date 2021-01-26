# My Medical History 💗

### Features

-   [ ] &nbsp; Store medical prescriptions.
-   [ ] &nbsp; Share prescriptions with family members, doctors, etc.
-   [ ] &nbsp; Health trackers fitbit, apple, amazfit, etc

### Frontend Folder Structure

| Folder / File | Description                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------- |
| components    | ui - header, footer, navigation, etc. <br/> utils - html elements like button, inputs, etc. |
| layouts       | we make a template container component and place the ui components.                         |
| pages         | pages like home, checkout, etc. each and every page has a specific layout.                  |
| npmrc         | npmrc file sets npm registry to public (https://registry.npmjs.org/)                        |

### Project

#### Improvements ⚡

-   [ ] &nbsp; Css

#### Done 👍

-   [x] &nbsp; Editorconfig file added to the project
-   [x] &nbsp; Prettier is working properly

#### Need 🍺

-   [ ] &nbsp; Webpack
-   [ ] &nbsp; Prettier need to add to the workspace
-   [ ] &nbsp; eslint-plugin-import package
-   [ ] &nbsp; fix dev server issues
-   [ ] &nbsp; eslint-plugin-react-hooks package
-   [ ] &nbsp; npm-run-all package

#### Tools 🧰

| Tools          | Description                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| nvm            | Download nvm, if you want to use different versions of node for different projects |
| `sass-loader`  | Turns sass into css                                                                |
| `style-loader` | Inject styles into DOM                                                             |

#### Todo 👇

-   [ ] &nbsp; Use html5 elements like aside, article, section, etc. especially for creating layouts

#### Project Configurations 🚀

`eslint` - It will help us to write better code by finding errors while coding.

`prettier` - it formats code and maintains consistency across different machines

**Issue** - eslint and prettier have common rules, which conflict each other. To avoid, we need to use two more packages `eslint-plugin-prettier` , `eslint-config-prettier`

`eslint-plugin-prettier` - Runs Prettier as an ESLint rule(allows ESLint to show formatting errors as we type). basically this package helps eslint and prettier to run together.

`eslint-config-prettier` - This package turns off eslint rules that conflict with prettier and uses prettier rules.

`eslint-plugin-react` - This package conatins React specific linting rules

`eslint and prettier extensions` - Extensions show swirly line in vscode while coding, So that no need to run eslint and prettier scripts.

`resolve: { extensions: ['.js', '.jsx'], },` - enables users to leave off the extension when importing. `resolve` is a property in webpack.

#### ToDo

-   fix dev server errors
-   git hooks

> 15-01-21

-   add sourcemaps to webpack config
-   validate props
