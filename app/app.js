/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var Resolver - Ember Resolve
 @type Object
 **/
import Resolver from './resolver';

/**
 @var loadInitializers - Ember Initializers
 @type Object
 **/
import loadInitializers from 'ember-load-initializers';

/**
 @var config - Environment config
 @type Object
 **/
import config from './config/environment';

/**
 @var App - Ember Application
 @extend Ember.Application
 @type Object
 **/
let App = Ember.Application.extend({

  /**
   Application Module Prefix
   @property modulePrefix
   @type String
   */
  modulePrefix: config.modulePrefix,

  /**
   Ember Resolver
   @property Resolver
   @type Object
   */
  Resolver

});

/*
Load custom initializers
@param App - Ember Application
@param config.modulePrefix - Ember Application module prefix
 */
loadInitializers(App, config.modulePrefix);

export default App;
