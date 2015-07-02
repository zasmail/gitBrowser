import Ember from 'ember';

var urlSegment = Ember.Component.extend({
  tagName: 'span',
  classNameBindings: ['isDynamic:dynamic:static'],
  content: undefined,
  isDynamic: Ember.computed('content', function(){
    if(this.get('content').charAt(0)==="{") {
      return true;
    }else {
      return false;
    }
  })
});

export default urlSegment;
