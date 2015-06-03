import Ember from 'ember';
import Endpoint from 'git-sandbox/models/endpoint';

var EndpointRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
      type: 'GET',
      url: 'https://api.github.com/',
      dataType: 'jsonp'
    }).then(function(data){
      return Em.keys(data.data).map ( function (element){
        var name = element;
        var url  = data.data[name];
        var endpoint = Endpoint.create( {name: name, url: url} );
        return endpoint;
      })
    })
  }
});

export default EndpointRoute;
