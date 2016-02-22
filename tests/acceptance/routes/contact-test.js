/* jshint expr:true */
import Ember from 'ember';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../../helpers/start-app';
import { invalidateSession, authenticateSession, currentSession } from '../../helpers/ember-simple-auth';
import destroyApp from '../../helpers/destroy-app';

describe('Acceptance: ContactRoute', function() {
  let application;
  let server;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.tryInvoke(server, 'shutdown');
    destroyApp(application);
  });

  describe('the contact route', () => {
    it('cannot be visited when the session is not authenticated', () => {
      invalidateSession(application);
      visit('/contact');

      return andThen(() => {
        expect(currentPath()).to.eq('login');
      });
    });

    it('can be visited when the session is authenticated', () => {
      authenticateSession(application, { account_id: 1});

      visit('/contact');

      return andThen(() => {
        expect(currentPath()).to.eq('contact');
        let session = currentSession(application);
        expect(session.get('data.authenticated.account_id')).to.eql(1);
      });
    });
  });
});
