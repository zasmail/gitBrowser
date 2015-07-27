import Ember from 'ember';

var urlSegment = Ember.Object.extend({
  segment: undefined,

  isDynamic: Ember.computed('content', function(){
    if(this.get('segment').charAt(0)==="{") {
      return true;
    }else {
      return false;
    }
  }),
  segmentClone: Ember.computed(function(key, value){
    return value;
  })
});

export default urlSegment;
