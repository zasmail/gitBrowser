import Ember from 'ember';

var EndpointModel = Ember.Object.extend({
  url: undefined,
  name: undefined,

  uri: Ember.computed('url', function(){
    var dynamicUri = this.get('url');
    var dynamic = dynamicUri.split("{").map(function(element){return element;});
    var first = dynamic[0];// WHY IS THERE NO POLL FX
    dynamic.shift();
    dynamic.forEach(function(name){
      dynamic[name] += "{";
      //this isn't doing anything- more problems with function scope
    });
    var uri = first + dynamic.join("{");
    return uri;
  }),
  englishName: Ember.computed('name', function(){
    var name = this.get('name');
    var english = name.split("_").map(function(element){return element.capitalize(); });
    english.pop();
    return english.join(" ");
  })
});

export default EndpointModel;
