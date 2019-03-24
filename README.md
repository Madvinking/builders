# Config convention for all build tools

## Basic Introduction
conventions to all build tools:
prettier, eslint tslint stylelint babel typescript and webapack
on place where you import the dependencie version
and one place where the configuration are declared

## Using the Eslint
the eslint is coming build in with the prettier,
so you don't need to install anything!

in order to configure linting in the project
1. add to devDependencies in your `package.json`:
```
    "@builders/eslint-config" : "1.0.0"
```
2. add to scripts in your `package.json`:
```
    "lint": "eslint ./**/*.js --quiet --fix"
```
3. create a file called  `.eslintrc.js` in the root of your project
4. copy this to the file:
```
    module.exports = {
    extends: '@builders/eslint-config',
    root: true
    };
```
5. dance! you done

** you can add your own rules in the `.eslintrc.js` file


## Using the Tslint
the tslint extend out default eslint with the ability to use ts
so you don't need to install anything again!!!!

in order to configure linting in the project
1. add to devDependencies in your `package.json`:
```
    "@builders/tslint-config" : "1.0.0"
```
2. add to scripts in your `package.json`:
```
    "lint": "eslint ./**/*.js --quiet --fix"
```
3. create a file called  `.eslintrc.js` in the root of your project
4. copy this to the file:
```
    module.exports = {
    extends: '@builders/tslint-config'
    };
```
5. dance! you done

** you can add your own rules in the `.eslintrc.js` file