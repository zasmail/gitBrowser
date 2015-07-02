import Ember from 'ember';

var EndpointModel = Ember.Object.extend({
  url: undefined,
  name: undefined,

  urlSegments: Ember.computed('url', function(){
    var url = this.get('url');
    var endpointSegments = [];
    var char = "";
    var curSegment = "";
    for (var i = 0; i < url.length; i++){
      char = url.charAt(i);
      if (char === "{"){
        if (curSegment.length > 0) {
          endpointSegments.push(curSegment);
        }
        curSegment = char;
      }else if(char === "}"){
        curSegment += char;
        endpointSegments.push(curSegment);
        curSegment = "";
      }else{
        curSegment += char;
      }
    }
    if (curSegment.length > 0) {
      endpointSegments.push(curSegment);
    }
    return endpointSegments;
  }),

  englishName: Ember.computed('name', function(){
    var name = this.get('name');
    var english = name.split("_").map(function(element){return element.capitalize(); });
    english.pop();
    return english.join(" ");
  })
});

export default EndpointModel;
