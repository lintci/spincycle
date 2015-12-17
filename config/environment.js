/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'spincycle',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'user:email,repo'
        }
      }
    },

    laundromat: {
      apiVersion: 'api/v1'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' https://api.lintci.com http://localhost:8080", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self'",
      'style-src': "'self'", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.torii.providers['github-oauth2'].apiKey = 'ff35d7dec8911f1337b3';
    ENV.torii.providers['github-oauth2'].redirectUri = 'http://localhost:4200/login';
    ENV.laundromat.apiHost = 'http://localhost:8080'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.torii.providers['github-oauth2'].apiKey = '7e78c3caa94895775b3a';
    ENV.torii.providers['github-oauth2'].redirectUri = 'https://spincycle.lintci.com/login';
    ENV.laundromat.apiHost = 'https://api.lintci.com'
  }

  ENV.laundromat.apiNamespace = ENV.laundromat.apiHost + '/' + ENV.laundromat.apiVersion
  ENV.laundromat.apiTokenEndpoint = ENV.laundromat.apiNamespace + '/auth/token'

  return ENV;
};
