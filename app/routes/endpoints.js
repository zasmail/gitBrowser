import Ember from 'ember';
import Endpoint from 'git-sandbox/models/endpoint';
import Settings from 'git-sandbox/config/environment';

var EndpointsRoute = Ember.Route.extend({
  endpoints: undefined,
  getUrl: 'getUrl',
  model: function() {
    return this._handleAllEndpoints();
  },
  actions: {
    getUrl: function (url){
      this._getPayload(url).then(function(data){
        console.log(data);
      }, function(data){
        console.log(data);
      })
    }
  },

  _getPayload: function (url) {
    return Ember.$.ajax({
      type: 'GET',
      url: url,
      dataType: 'jsonp',
      data: { access_token: Settings.OAUTH.GIT }
    })
  },

  _handleAllEndpoints: function() {
    return this._getPayload("https://api.github.com/").then(function(data){
      var rate =  data.meta["X-RateLimit-Remaining"];

      var endpoints=  Ember.keys(data.data).map ( function (element){
        var name = element;
        var url  = data.data[name];
        var endpoint = Endpoint.create( {name: name, url: url} );
        return endpoint;
      });
      return {rate: rate, endpoints: endpoints};
    });
  }



});

export default EndpointsRoute;
