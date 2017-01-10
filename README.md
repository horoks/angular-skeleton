# angular-skeleton
skeleton project for angularJs (Bower / Gulp / NPM)

**Inspired from HotTowel Angular**

## Prerequisites

1. Install [Node.js](http://nodejs.org)

2. Install these NPM packages globally

    ```bash
    npm install bower gulp -g --no-optional
    ```

3. Install project dependencies

- `npm install --no-optional`
- `bower install`

>*If you have trouble with gulp try to run `npm install` again*

## Running

### Linting
 - Run code analysis using `gulp analyze`. This runs jshint, jscs, and plato.
 
### Building the project
 - Build the optimized project using `gulp build-prod`
 - Build the non-optimized project using `gulp build-debug`
 - This create the optimized code for the project and puts it in the dist folder
 
 ### Installing Packages
When you generate the project it should run these commands, but if you notice missing packages, run these again:

 - `npm install --no-optional`
 - `bower install`
 
 ### Code Analysis

- `gulp analyze`

    Performs static code analysis on all javascript files. Runs jshint and jscs.
