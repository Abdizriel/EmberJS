/* jshint expr:true */
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../../helpers/start-app';
import { invalidateSession, authenticateSession } from '../../helpers/ember-simple-auth';
import destroyApp from '../../helpers/destroy-app';

describe('Acceptance: LoginRoute', function() {
  let application;
  let server;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.tryInvoke(server, 'shutdown');
    destroyApp(application);
  });

  describe('the login route', () => {
    it('can be visited when the session is not authenticated', () => {
      invalidateSession(application);
      visit('/login');

      return andThen(() => {
        expect(currentPath()).to.eq('login');
      });
    });

    it('cannot be visited when the session is authenticated', () => {
      authenticateSession(application);
      visit('/login');

      return andThen(() => {
        expect(currentPath()).to.eq('index');
      });
    });
  });

});
