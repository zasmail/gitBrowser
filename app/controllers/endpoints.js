import Ember from 'ember';

var EndpointsController = Ember.Controller.extend({
  selectedEndpoint: null,
  endpoints: Ember.computed.alias('model')
});

export default EndpointsController;
