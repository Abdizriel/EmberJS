/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var config - Environment config
 @type Object
 **/
import config from './config/environment';

/**
 @var Router - Ember module
 @extend Ember.Router
 @type Object
 @final
 **/
const Router = Ember.Router.extend({

  /**
   Locaction Type
   @property location
   @type String
   */
  location: config.locationType

});

/*
Map route paths
 */
Router.map(function() {
  this.route('login');
  this.route('about', { path: '/about-me' });
  this.route('contact');
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
