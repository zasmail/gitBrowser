import Ember from 'ember';

var EndpointModel = Ember.Object.extend({
  url: undefined,
  name: undefined,
  englishName: Ember.computed('name', function(){
    var name = this.get('name');
    var english = name.split("_").map(function(element){return element.capitalize(); });
    english.pop();
    return english.join(" ");
  })
});

export default EndpointModel;
