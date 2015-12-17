import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  repositories: DS.hasMany('repository'),

  name: DS.attr(),
  provider: DS.attr(),

  url: Ember.computed('provider', 'name', function(){
    return `https://github.com/${this.get('name')}`;
  })
});
