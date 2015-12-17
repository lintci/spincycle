import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('owner'),
  activation: DS.belongsTo('repository/activation'),
  // builds: DS.hasMany('build', {async: true}),

  name: DS.attr(),
  provider: DS.attr(),
  status: DS.attr(),

  fullName: Ember.computed('owner.name', 'name', function() {
    return `${this.get('owner.name')}/${this.get('name')}`;
  }),

  url: Ember.computed('fullName', function() {
    return `https://github.com/${this.get('fullName')}`;
  }),

  isActive: Ember.computed.equal('status', 'active'),
  isActivating: Ember.computed.equal('status', 'activating'),
  isInactive: Ember.computed.equal('status', 'inactive'),
  isDeactivating: Ember.computed.equal('status', 'deactivating'),
});
