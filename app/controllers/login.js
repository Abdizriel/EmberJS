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
 Login Controller
 @extends Ember.Controller
 */
export default Ember.Controller.extend({

  /**
   Session Service
   @property session
   @type Object
   */
  session: service('session'),

  /**
   Actions available for Contact Route
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
    }

  }
});
