/**
 @var FacebookOauth2Provider - Torii Facebook Provider
 @type Object
 **/
import FacebookOauth2Provider from 'torii/providers/facebook-oauth2';

/**
 Facebook Provider
 @extends FacebookOauth2Provider
 */
export default FacebookOauth2Provider.extend({

  /**
   Fetch Facebook Data
   @property fetch
   @type Function
   @returns data {Object}
   */
  fetch(data) {
    return data;
  }

});
