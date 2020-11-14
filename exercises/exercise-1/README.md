# Exercise 1 - Setup Spartacus

In this exercise, you will setup Spartacus on your local system.

**TLTR:** The exercise can be done with a few quick commands. If you're comfortable with Angular development, you can pass this exercise using the following commands and you'd be up and running within a minute.

```
ng new my-storefront --routing=false --style=scss
cd my-storefront
ng add @spartacus/schematics@next \
  --baseUrl=https://spartacus-demo.eastus.cloudapp.azure.com:8443 \
  --occPrefix=/occ/v2 --baseSite=electronics-spa
```

If you like to better understand these commands, you can go through the sub exercises below.

---

## Exercise 1.1 Confirm prerequisites

If you went through the [prerequisites](../../prerequisites.md) already you can skip this exercise and start exercise 1.2.

Ensure that you have the prerequisites in place by the validating the following commands in a terminal:

- Run `node --version` to confirm the Node.js version on your local system. The version should be between `10.14.1` and `13`. Later version might work, but are not actively tested.
- Run `yarn --version` to confirm the version of [Yarn](https://yarnpkg.com/) on your local system. The version should be 1.15 or later. If you like to use npm instead you should be fine, but we're not actively testing this.
- Run `ng --version` to confirm the Angular CLI version. Spartacus 3.x supports Angular 10.

## Exercise 1.2 Create Angular application

Spartacus is distributed as a set of npm packages, that you can add to an angular application. Creating an Angular application is easily done with the [Angular CLI](https://cli.angular.io/). You can run the following command in a terminal to generate a new Angular application

```shell
ng new storefront --routing=false --style=scss
```

This creates a new Angular application, called "storefront", without routing and using the SCSS style syntax.

You can run the newly created application by executing `yarn start` in the terminal. You should run this inside the newly created application folder, so you probably need to run `cd storefront` upfront.
The dev server starts by default on port 4200; You can open the application, using: http://localhost:4200.

---

**Note**: The newly generated application comes with a clean git repo, which allows you to track changes while you're building out the exercises in this workshop. It is recommended to commit your changes after each exercise, so that you can roll back easily as well as clearly see what you've done.

---

## Exercise 1.3 Install Spartacus

Once you have generated you Angular application, you can add Spartacus to it. You can add dependencies using `yarn add`, however the amount of direct and indirect packages can be cumbersome to add. Therefor Spartacus provides an _installer_ process that simplifies the installation. The installer is based on [Angular schematics](https://angular.io/guide/schematics) and can be added by the `ng add` command.

To simplify the default configuration of spartacus even more, we're adding few more parameters.

```shell
ng add @spartacus/schematics@next \
  --baseUrl=https://spartacus-demo.eastus.cloudapp.azure.com:8443 \
  --occPrefix=/occ/v2 --baseSite=electronics-spa
```

**Note**: the backslash is only used to make the command better readable. It will be ignored when you paste it in you terminal.

This command will do the following:

- Adds Spartacus direct and indirect dependencies to the `package.json` file.
- Install the dependencies.
- Configures Spartacus application by providing a configuration in the `app.module`.

You might want to commit your changes to the local git repo so that you keep track of the changes going forward. You don't need to publish your commits, but having a local commit history is going to be very helpful while you work yourself through the material.

## Exercise 1.4 Run Spartacus

You can run your local Spartacus application, using the following command:

```shell
yarn start
```

This command will run the angular dev server, using `ng serve` under the hood.

Once the application is started, you can launch it in the browser: [http//:localhost:4200](http//:localhost:4200).

Moreover, you can start developing your application without restarting the server. The changes will be _hot deployed_ and your browser will auto refresh so that you can quickly evaluate the changes.

## Summary

You've now installed Spartacus locally. If you run the storefront in [http//:localhost:4200](http//:localhost:4200) you should see the _electronics_ storefront content.

Continue to [Exercise 2 - Implement Product Comparison Selector](../exercise-2/README.md)
