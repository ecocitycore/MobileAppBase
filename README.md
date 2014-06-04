Ionic + AngularJS + Karma + Jasmine + Protractor App Base
=====================

A starting project for mobile application including the above mentioned frameworks.

# Using this project

1. Clone the repo to your hard drive
2. Navigate to the new folder
3. Make sure that you have installed `node.js` and `npm`.
4. Install Ionic and the needed dependencies `sudo npm install -g cordova ionic gulp bower`
5. Run `npm install` to install the dependencies
6. Run `gulp install`
7. The project has android added as a platform, use `ionic platform add ios` to add the iOS platform. More about this on the ionic's website.

# Testing

## Karma & Jasmine

Running unit tests with Karma and Jasmine can happen by either

1. Using `npm test` in the root directory
or
2. By navigating to `/test` and using `karma start karma.conf.js`

Add any unit tests in the `/test/specs/**` folders.

## Protractor

Running end to end tests with Protractor can happen by either

1. Using `npm protractor`
or
2. By navigating to `/test/ and using `protractor protractor-conf.js`

## Get to know the app

All the client side javascript, html and css is happening in the `www` folder of the project.
The `js` folder contains `app.js` and `modules.js`. The `app.js` is used for initialization and the `modules.js` to initialize all the modules, such as for controllers and factories.

New controllers belong in the `controllers` folder and so on. Defining a new controller can happen as follows:

```javascript
angular.module('controllers').controller('BaseController', function($scope) {

});
```

Then the controller must be included in the `index.html`:

```html
<!--controllers-->
    <script src="js/controllers/baseCtrl.js"></script>
```

