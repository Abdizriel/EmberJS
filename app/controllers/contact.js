/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 @var raw - Ember AJAX interface
 @type Object
 **/
import raw from 'ic-ajax';

/**
 Contact Controller
 @extends Ember.Controller
 */
export default Ember.Controller.extend({

  /**
   Response from server
   @property response
   @type Object
   @default '{}'
   */
  response: {},

  /**
   Email address to contact with
   @property emailAddress
   @type String
   @default ''
   */
  emailAddress: '',

  /**
   Check if email address input was focused
   @property emailAddressFocused
   @type Boolean
   @default false
   */
  emailAddressFocused: false,

  /**
   Computed property that check if email address is valid
   @property isValidEmail
   @type Boolean
   */
  isValidEmail: Ember.computed.match('emailAddress', /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i),

  /**
   Message title
   @property messageTitle
   @type String
   @default ''
   */
  messageTitle: '',

  /**
   Check if message title input was focused
   @property messageTitleFocused
   @type Boolean
   @default false
   */
  messageTitleFocused: false,

  /**
   Computed property that check if messageTitle length is at least 5
   @property isValidTitle
   @type Boolean
   */
  isValidTitle: Ember.computed.gte('messageTitle.length', 5),

  /**
   Message text
   @property messageText
   @type String
   @default ''
   */
  messageText: '',

  /**
   Check if message text textarea was focused
   @property messageTextFocused
   @type Boolean
   @default false
   */
  messageTextFocused: false,

  /**
   Computed property that check if messageText length is at least 25
   @property isValidMessage
   @type Boolean
   */
  isValidMessage: Ember.computed.gte('messageText.length', 25),

  /**
   Computed property that check if emailAddress, messageTitle and messageText are valid
   @property isValid
   @type Boolean
   */
  isValid: Ember.computed.and('isValidEmail', 'isValidTitle', 'isValidMessage'),

  /**
   Computed property that disable/enable send button based on isValid property
   @property isDisabled
   @type Boolean
   */
  isDisabled: Ember.computed.not('isValid'),

  /**
   Actions available for Contact Route
   @property actions
   @type Object
   */
  actions: {

    /**
     Send Message to server
     @function sentMessage
     @type Function
     */
    sentMessage () {

      /*
      Data to send
      @var jsonData
      @type Object
       */
      let jsonData = {
        email: this.get('emailAddress'),
        title: this.get('messageTitle'),
        message: this.get('messageText')
      };

      /*
       Config to raw interface
       @var config
       @type Object
       */
      let config = {
        url: '/api/contact',
        type: 'POST',
        dataType: 'json',
        data: jsonData
      };

      raw(config)
        .then((response) => {

          /*
           Set response data
           */
          this.set('response', {
            headline: response.data.attributes.headline,
            message: response.data.attributes.message
          });

          /*
           Set empty property of contact form
           */
          this.set('emailAddress', '');
          this.set('emailAddressFocused', false);
          this.set('messageTitle', '');
          this.set('messageTitleFocused', false);
          this.set('messageText', '');
          this.set('messageTextFocused', false);
        })
        .catch((err) => console.error(err));

    }

  }
});
