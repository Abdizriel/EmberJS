/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var Torii - Ember Simple Auth Torii module
 @type Object
 **/
import Torii from 'ember-simple-auth/authenticators/torii';

/**
 @var raw - AJAX interface
 @type Object
 **/
import raw from 'ic-ajax';

/**
 @var RSVP - Ember Promise
 @type Object
 @final
 **/
const { RSVP } = Ember;

/**
 @var service - Service selector
 @type Object
 @final
 **/
const { service } = Ember.inject;

/**
 Torii Authenticator
 @extends Torii
 */
export default Torii.extend({

  /**
   Torii service
   @property torii
   @type Object
   */
  torii: service('torii'),

  /**
   Torii authenticate
   @property authenticate
   @type Function
   @return Promise
   */
  authenticate() {
    return new RSVP.Promise((resolve, reject) => {
      this._super(...arguments).then((data) => {

        /*
         Data to send
         @var jsonData
         @type Object
         */
        let jsonData = {
          grant_type: 'facebook_auth_code',
          auth_code: data.authorizationCode
        };

        /*
         Config to raw interface
         @var config
         @type Object
         */
        let config = {
          url: '/api/token',
          type: 'POST',
          dataType: 'json',
          data: jsonData
        };

        raw(config)
          .then((response) => {

            /*
             Set Promise resolve
             */
            resolve({
              access_token: response.access_token,
              account_id: response.account_id,
              provider: data.provider
            });
          }, reject);
      }, reject);
    });
  }

});
