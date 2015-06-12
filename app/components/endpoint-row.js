import Ember from 'ember';

var EndpointRow = Ember.Component.extend({
  tagName: 'li',
  content: null,
  name: Ember.computed.alias('content.name'),
  url: Ember.computed.alias('content.url'),
  urlSegments: Ember.computed.alias('content.urlSegments')

});

export default EndpointRow;
