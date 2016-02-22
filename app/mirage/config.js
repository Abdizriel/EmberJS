/**
 @var Mirage - Ember Fake Server
 @type Object
 **/
import Mirage from 'ember-cli-mirage';

export default function() {

  this.namespace = '/api';

  /*
  Server Fake POST /token request
   */
  this.post('/token', (db, request) => {

    /*
    Regex to get grant_type and auth_code
     */
    const re = /^grant_type=(\w*)&auth_code=(.*)$/;
    let match = re.exec(request.requestBody);

    if (match !== null) {
      if (match.index === re.lastIndex) {
        re.lastIndex++;
      }

      if (match[1] === 'facebook_auth_code') {
        if (match[2]) {
          return {
            access_token: match[2],
            account_id: 1
          };
        } else {
          return new Mirage.Response(400, {}, { error: 'invalid_gran' });
        }
      } else {
        return new Mirage.Response(400, {}, { error: 'unsupported_grant_type' });
      }

    }
  });

  /*
   Server Fake POST /contact request
   */
  this.post('/contact', () => {

    return {
      data: {
        type: 'contact',
        id: 1,
        attributes: {
          status: 200,
          headline: 'Success',
          message: 'I have received your message.'
        }
      }
    };

  });
}
