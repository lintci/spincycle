import Ember from 'ember';
import ENV from '../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  session: Ember.inject.service('session'),
  host: ENV.laundromat.apiHost,
  namespace: ENV.laundromat.apiVersion,
  headers: Ember.computed('session.currentUser.access_token', function(){
    return {Authorization: 'Bearer ' + this.get('session.currentUser.access_token')};
  })
});
