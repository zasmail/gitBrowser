import Ember from 'ember';
import urlSegment from 'git-sandbox/models/url-segment';

var urlSegmentComponent = Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['isDynamic:dynamic:static'],
  segment: Ember.computed.alias('content.segment'),
  isInputting: false,
  isDynamic: Ember.computed.alias('content.isDynamic'),
  onStopInputting: undefined,

  actions: {
    startInputting: function (){
      this.set('isInputting', true);
    },

    stopInputting: function (){
      this.set('isInputting', false);
      this.sendAction('onStopInputting', this);
    }
  }
});

export default urlSegmentComponent;
