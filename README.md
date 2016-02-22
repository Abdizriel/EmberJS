# Ember2.3 App

Demo of current app could be found [here](https://young-lowlands-63364.herokuapp.com/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

To deploy application on Heroku perform following steps:

* Create [Heroku Account](https:/heroku.com/)
* Install Heroku Toolbar
* From main Ember App directory run `heroku create --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git`
* Save Heroku app Id for example `young-lowlands-63364`
* cd <project directory>
* git init
* git add --all
* git commit -m "First commit"
* heroku git:remote -a <heroku app id>
