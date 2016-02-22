/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var AuthenticatedRouteMixin - Authenticated Router
 @type Object
 **/
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

/**
 Contact Route
 @extends Ember.Route
 @params UnauthenticatedRouteMixin {Object}
 */
export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  titleToken: 'Login'
});
