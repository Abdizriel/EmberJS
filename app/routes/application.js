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
 Application Route
 @extends Ember.Route
 @params ApplicationRouteMixin {Object}
 */
export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    return tokens.join(' - ') + ' - Marcin Mrotek';
  }
});
