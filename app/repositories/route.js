import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('repository', {include: 'owner'});
  },

  setupController(controller, model) {
    controller.set('repositories', model);
  },

  actions: {
    error(error, transition) {
      this.router.transitionTo('login');
    },

    activate(repo) {
      repo.set('status', 'activating');
      repo.save();
    },

    deactivate(repo) {
      repo.set('status', 'deactivating');
      repo.save();
    }
  }
});
