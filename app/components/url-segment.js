import Ember from 'ember';

var urlSegment = Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['isDynamic:dynamic:static'],
  content: undefined,
  other: "other",
  isInputting: false,
  isDynamic: Ember.computed('content', function(){
    if(this.get('content').charAt(0)==="{") {
      return true;
    }else {
      return false;
    }
  }),

  actions: {
    startInputting: function (){
      this.set('isInputting', true);
    },

    stopInputting: function (){
      this.set('isInputting', false);
    }
  }
});

export default urlSegment;
