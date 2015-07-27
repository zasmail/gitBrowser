import Ember from 'ember';
import Endpoint from 'git-sandbox/models/endpoint';
import Settings from 'git-sandbox/config/environment';

var EndpointsRoute = Ember.Route.extend({
  endpoints: undefined,
  getUrl: 'getUrl',
  model: function() {
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://api.github.com/',
      dataType: 'jsonp',
      data: { access_token: Settings.OAUTH.GIT }
    }).then(function(data){
      var rate =  data.meta["X-RateLimit-Remaining"];

      var endpoints=  Ember.keys(data.data).map ( function (element){
        var name = element;
        var url  = data.data[name];
        var endpoint = Endpoint.create( {name: name, url: url} );
        return endpoint;
      });
      return {rate: rate, endpoints: endpoints};
    });
  },
  actions: {
    stopInputting: function (){
      debugger;
      console.log("here");
    },
    getUrl: function (){
      debugger;
      console.log("there");
    }
  }


});

export default EndpointsRoute;
