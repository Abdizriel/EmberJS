/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('route:contact', 'ContactRoute', {
  needs: ['service:session', 'router:main']
}, function() {
  it('is still testable when using the AuthenticatedRouteMixin', function() {
    const route = this.subject();

    expect(route).to.be.ok;
  });
});
