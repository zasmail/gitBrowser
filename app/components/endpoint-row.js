import Ember from 'ember';
import Settings from 'git-sandbox/config/environment';

var EndpointRow = Ember.Component.extend({
  classNames:         [ 'endpoint-row-container' ],
  content:      null,

  name:        Ember.computed.alias('content.englishName'),
  url:         Ember.computed.alias('content.url'),
  urlSegments: Ember.computed.alias('content.urlSegments'),

  urlString: Ember.computed('content', function(){
    var segments = this.get('urlSegments').map (function(segment){return segment.segment;});
    return segments.join("");
  }),

  actions: {
    getUrl: function() {
      this.sendAction('onGetUrl', this.get('urlString'));
    },
    clear: function() {
       this.get('urlSegments').forEach(function(segment){
         segment.reset();
       })
    },
    cancel: function(segment){
      segment.reset();
    }
  }
});

export default EndpointRow;
