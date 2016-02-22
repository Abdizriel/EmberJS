/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var ApplicationRouteMixin - Map session events
 @type Object
 **/
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

/**
 Index Route
 @extends Ember.Route
 @params ApplicationRouteMixin {Object}
 */
export default Ember.Route.extend(ApplicationRouteMixin, {
  titleToken: 'Homepage'
});
