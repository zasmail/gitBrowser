import Ember from 'ember';
import Endpoint from 'git-sandbox/models/endpoint';
//import Settings from 'git-sandbox/config/environment.js';

var EndpointsRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://api.github.com/',
      dataType: 'jsonp',
      //data: { access_token: Settings.OAUTH.GIT }
      data: { access_token: '551d0c04a362d8c84c33ff6b6177ff13fec80607' }
    //}).then(function(data){
    //  var rate =  data.meta["X-RateLimit-Remaining"];
    //  debugger
    }).then(function(data){
      //var rate =  data.meta["X-RateLimit-Remaining"];
      //debugger
      //can't get around function scope here
      //Bad solution: inject rate into every element- I tried this but couldn't figure out how to circumvent the function scope
      //Good solution: I think a second then which handles the meta data- when I tried this, the concept of data was data.data
      return Ember.keys(data.data).map ( function (element){
        var name = element;
        var url  = data.data[name];
        var endpoint = Endpoint.create( {name: name, url: url} );
        return endpoint;
      });
    });
  }
});

export default EndpointsRoute;
