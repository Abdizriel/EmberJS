/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';

describeModule('controller:contact', 'ContactController', { }, function() {
  it('is exist', function() {
    const ctrl = this.subject();
    expect(ctrl).to.be.ok;
  });

  it('is setting emailAddress', function() {
    const ctrl = this.subject();

    let emailAddress = 'kontakt@marcinmrotek.pl';
    ctrl.set('emailAddress', emailAddress);
    expect(ctrl.get('emailAddress')).to.eql(emailAddress);

    emailAddress = 'kontakt';
    ctrl.set('emailAddress', emailAddress);
    expect(ctrl.get('emailAddress')).to.eql(emailAddress);
  });

  it('is setting messageTitle', function() {
    const ctrl = this.subject();

    let messageTitle = 'Test Message';
    ctrl.set('messageTitle', messageTitle);
    expect(ctrl.get('messageTitle')).to.eql(messageTitle);

    messageTitle = 'Test';
    ctrl.set('messageTitle', messageTitle);
    expect(ctrl.get('messageTitle')).to.eql(messageTitle);
  });

  it('is setting messageText', function() {
    const ctrl = this.subject();

    let messageText = 'Aenean dignissim vulputate lorem a tincidunt. Praesent in euismod est. Vestibulum a ' +
      'condimentum magna. Integer velit mi, efficitur non volutpat condimentum, fringilla maximus arcu. ' +
      'Aenean varius efficitur nunc nec dignissim. Praesent iaculis arcu non ultricies pellentesque. Mauris ' +
      'pulvinar convallis hendrerit.';
    ctrl.set('messageText', messageText);
    expect(ctrl.get('messageText')).to.eql(messageText);

    messageText = 'Test';
    ctrl.set('messageText', messageText);
    expect(ctrl.get('messageText')).to.eql(messageText);
  });
});
