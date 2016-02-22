/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 Hide `container` is deprecated warning from console until Ember Simple Auth would be fixed
 @function sentMessage
 @type Function
 @param application
 */
export function initialize() {
  Ember.Debug.registerDeprecationHandler((message, options, next) => {
    if (options.id === 'ember-application.injected-container') {
      return;
    }
    next(message, options);
  });
}

export default {
  name: 'deprecations',
  initialize
};
