/**
 @var DS - Ember Data module
 @type Object
 **/
import DS from 'ember-data';

/**
 @var DataAdapterMixin - Ember Simple Auth Data Adapter
 @type Object
 **/
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

/**
 Application Adapter
 @extends DS.JSONAPIAdapter
 @params DataAdapterMixin
 */
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {

  /**
   Authorize all API requests in Application
   @property authorizer
   @type String
   */
  authorizer: 'authorizer:application'

});
