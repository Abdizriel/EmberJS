/**
 @var Ember - Ember module
 @type Object
 **/
import Ember from 'ember';

/**
 Validate Input Component
 @extends Ember.Component
 */
export default Ember.Component.extend({

  /**
   Check if input was focused
   @property beenFocused
   @type Boolean
   @default false
   */
  beenFocused: false,

  /**
   Input validation
   @property valid
   @default null
   */
  valid: null,

  /**
   Validate input with provided validation
   @property hasError
   @type Boolean
   */
  hasError: Ember.computed('valid', 'beenFocused', function() {
    if (this.get('beenFocused')) {
      return !this.get('valid');
    }
  }),

  /**
   Set beenFocused true on input focus
   @property focusOut
   @type Function
   */
  focusOut () {
    this.set('beenFocused', true);
  }

});
