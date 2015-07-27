import Ember from 'ember';
import UrlSegment from 'git-sandbox/models/url-segment';

var EndpointModel = Ember.Object.extend({
  url: undefined,
  name: undefined,
  segments: undefined,

  urlSegments: Ember.computed('url', function(){
    var url = this.get('url');
    var endpointSegments = [];
    var char = "";
    var curSegment = "";
    var segment = {};
    for (var i = 0; i < url.length; i++){
      char = url.charAt(i);
      if (char === "{"){
        if (curSegment.length > 0) {
          segment = UrlSegment.create( {segment: curSegment} );
          endpointSegments.push(segment);
        }
        curSegment = char;
      }else if(char === "}"){
        curSegment += char;
        segment = UrlSegment.create( {segment: curSegment} );
        endpointSegments.push(segment);
        curSegment = "";
      }else{
        curSegment += char;
      }
    }
    if (curSegment.length > 0) {
      segment = UrlSegment.create( {segment: curSegment} );
      endpointSegments.push(segment);
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
