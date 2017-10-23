Stratus Addon Project
================

A community collaboration between Stratus Addon Project and ResourcePile. Read the [contributing guide](https://mcresourcepile.github.io/addon-project/wiki/tools/contributing) to learn how to contribute to the website.

Any changes pushed to the remote will be automatically built and deployed the production site at [/addon-project/wiki](https://mcresourcepile.github.io/addon-project/wiki).


Building the page locally
-----------------

- Install npm
- Run `npm install -g grunt-cli` to install grunt globally
- Run `npm install` from this project folder to install all dependencies
- Run `grunt` to compile the page
- The output will be in the `out/` folder

Testing the site offline (optional):

- Run `npm install -g local-web-server`
- Run `ws` from the `out/` directory to start a webserver on localhost
- Visit http://127.0.0.1:8000/index.html to test. You will manually have to add `.html` behind the URL every time you click a link.
This is for crazy dont accept
