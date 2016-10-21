import Ember from 'ember';

var urlSegment = Ember.Object.extend({
  segment: undefined,
  segmentName: undefined,

  isDynamic: Ember.computed('content', function(){
    if(this.get('segment').charAt(0)==="{") {
      return true;
    }else {
      return false;
    }
  }),

  reset: function(){
    if (this.get('isDynamic')){
      this.set('segment', this.get('segmentName'));
    }
  }
});

export default urlSegment;
