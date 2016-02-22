/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var AuthenticatedRouteMixin - Authenticated Router
 @type Object
 **/
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

/**
 Contact Route
 @extends Ember.Route
 @params AuthenticatedRouteMixin {Object}
 */
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  titleToken: 'Contact'
});
