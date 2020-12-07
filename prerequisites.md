# Prerequisites

## Local Development Environment

Spartacus developer uses nodejs for development. There are various tools that require nodejs, such as the Angular CLI, typescript compiler and local development server.

Installing Node.js and other tools might take a bit of time and we have not planned for this during the session. It is therefore **important** that you come prepared.

- **Node.js**  
  Spartacus supports node.js version 10.14.1 or later, but smaller than version 13.0. Other Node.js versions might work, but are not actively tested.

  You can run `node --version` in a terminal window to validate the installed version.

- **node package manager**  
  Node.js development depends on npm packages for many features and functions. To download and install npm packages, you need a package manager. The Spartacus team uses [Yarn](https://yarnpkg.com/), but npm will work similarly. The exercises in this session require npm client command line interface, which is installed with Node.js by default.

  Spartacus supports Yarn version 1.15 or later. You can run `yarn --version` in a terminal window to validate the installed version.

- **Angular CLI**  
  Spartacus is distributed as npm packages, and as a Spartacus application developer you need to create an initial application.

  This requires the Angular CLI. The CLI can be installed as a (global) Node.js dependency, see the [Angular guide](https://angular.io/guide/setup-local#install-the-angular-cli) to install the Angular CLI.

  Spartacus 2.x supports Angular 9, where as Spartacus 3.0 will support Angular 10. We'll be using Spartacus 3 in the exercises, you should have Angular CLI 10 installed.

### Test your local environment

If you have never build an Angular application locally, it would be a good exercises to do this upfront. The Angular CLI comes with a few command line options that you can use to create and run a sample application locally:

- [ng new](https://angular.io/cli/new)  
  Creates a new new application on you local system.
- [ng serve](https://angular.io/cli/serve)  
  Runs the newly created application. (note: You must run this command from the newly created application folder)

You should be able open the newly created application in a web browser, open [http://localhost:4200](http://localhost:4200).

<a name="recommendations"></a>

## Recommended tools

While not required, it is highly recommended that you use an IDE for Spartacus development. Most Spartacus developers use [Visual Studio Code](https://code.visualstudio.com/). VS code in an open source project that comes with a lot of useful features and has an extension market place with loads of additional extensions.

Some useful extensions that we recommend you to use during development:

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)  
  A service that provides additional code completion.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
  A code formatter that keeps your code aligned without work.
- [TS Lint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
  Applies static analysis while developing, it improves readability and maintainability.
- [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
  Prevents typos in your code.
