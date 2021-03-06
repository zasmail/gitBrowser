import Ember from 'ember';

var EndpointsController = Ember.Controller.extend({
  selectedEndpoint: null,
  endpoints: Ember.computed.alias('model.endpoints'),
  rate: Ember.computed.alias('model.rate'),
});

export default EndpointsController;
