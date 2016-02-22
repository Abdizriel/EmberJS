/* jshint expr:true */
import { it } from 'ember-mocha';
import { describe, afterEach } from 'mocha';
import { expect } from 'chai';
import Configuration from 'ember-simple-auth/configuration';

describe('Configuration', () => {
  afterEach(() => {
    Configuration.load({});
  });

  describe('baseURL', () => {
    it('defaults to undefined', () => {
      Configuration.load({});
      expect(Configuration.baseURL).to.eql(undefined);
    });
  });

  describe('authenticationRoute', () => {
    it('defaults to "login"', () => {
      expect(Configuration.authenticationRoute).to.eql('login');
    });
  });

  describe('routeAfterAuthentication', () => {
    it('defaults to "index"', () => {
      expect(Configuration.routeAfterAuthentication).to.eql('index');
    });
  });

  describe('routeIfAlreadyAuthenticated', () => {
    it('defaults to "index"', () => {
      expect(Configuration.routeIfAlreadyAuthenticated).to.eql('index');
    });
  });

});
