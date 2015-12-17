import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
  open(authentication) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: ENV.laundromat.apiTokenEndpoint,
        type: 'POST',
        data: {code: authentication.authorizationCode, provider: 'github'},
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then((user) => {
      let session = {
        currentUser: user
      };

      window.localStorage.setItem('session', JSON.stringify(session));

      return session;
    });
  },

  fetch() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let session = window.localStorage.getItem('session');

      if(session) {
        resolve(JSON.parse(session));
      } else {
        reject();
      }
    });
  },

  close() {
    return new Ember.RSVP.Promise((resolve) => {
      window.localStorage.removeItem('session');
      resolve();
    });
  }
});
