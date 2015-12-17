import Ember from 'ember';

export default Ember.Component.extend({
  repo: null,
  activate: null,
  deactivate: null,

  isTransitioning: Ember.computed('status', function() {
    return this.get('repo.isActivating') || this.get('repo.isDeactivating');
  }),

  transition: Ember.computed('status', function() {
    if(this.get('repo.isActive')) return 'deactivate';
    if(this.get('repo.isInactive')) return 'activate';
    if(this.get('repo.isActivating')) return 'activating';
    if(this.get('repo.isDeactivating')) return 'deactivating';
  }),

  click() {
    if(this.get('isTransitioning')) return false;

    this.sendAction(this.get('transition'), this.get('repo'));
  }
});
