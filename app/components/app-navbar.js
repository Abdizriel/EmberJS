/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var service - Service selector
 @type Object
 @final
 **/
const { service } = Ember.inject;

/**
 Application Navbar Component
 @extends Ember.Component
 */
export default Ember.Component.extend({

  /**
   Session Service
   @property session
   @type Object
   */
  session: service('session'),

  /**
   Actions available for Application Navbar Component
   @property actions
   @type Object
   */
  actions: {

    /**
     Authenticate user with Facebook Torii provider
     @function authenticateWithFacebook
     @type Function
     */
    authenticateWithFacebook () {
      this
        .get('session')
        .authenticate('authenticator:torii', 'facebook')
        .catch((reason) => {
          this.set('errorMessage', reason.error);
        });
    },

    /**
     Log out user
     @function logout
     @type Function
     */
    logout () {
      this
        .get('session')
        .invalidate();
    }
  }
});
