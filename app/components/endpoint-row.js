import Ember from 'ember';
import Settings from 'git-sandbox/config/environment';

var EndpointRow = Ember.Component.extend({
  classNames:         [ 'endpoint-row-container' ],
  classNameBindings:  [ 'isHovered:launchable' ],
  content:      null,
  isHovered:    true,
  delay:        200,
  isHovered:    false,
  debounce:     undefined,
  $content:     undefined,
  $container:   undefined,
  $el:          undefined,
  fire:         'getUrl',

  name:        Ember.computed.alias('content.englishName'),
  url:         Ember.computed.alias('content.url'),
  urlSegments: Ember.computed.alias('content.urlSegments'),

  urlString: Ember.computed('content', function(){
    var segments = this.get('urlSegments').map (function(segment){return segment.segment;});
    return segments.join("/");
  }),
  getUrl: undefined,

  mouseEnter: function() {
    var $el         = this.$()
    var $content    = this.get('$content')
    var delay       = this.get('delay')
    //debounce the hover state
    this.set('debounce', Em.run.debounce(this, '_revealHoverState', delay));
  },

  mouseLeave: function() {
    this._cancelScheduledItem();
    // remove hover state and restore styles
    this.set('isHovered', false);
  },

  _cancelScheduledItem: ( function(){
    Em.run.cancel(this.get('debounce'));
  }
  ).on ('willDestroyElement'),

  actions: {
    onGetUrl: function() {
      this.sendAction('fire', 'urlString');
    }
  },

  _revealHoverState: function(){
    this.set ('isHovered', true);
  }
});

export default EndpointRow;
