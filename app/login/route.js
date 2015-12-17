import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if(this.get('session.currentUser')) this.router.transitionTo('repositories');
  },

  actions: {
    loginWithGithub() {
      let route = this;

      this.get('session').open('github-oauth2').then(function(){
        route.transitionTo('repositories');
      }, function(error){
        route.controllerFor('login').set('error', 'Could not sign you in: '+error.message);
      });
    }
  }
});
