import { moduleFor, test } from 'ember-qunit';
import Endpoint from 'git-sandbox/models/endpoint';

moduleFor('route:endpoints', 'Unit | Route | endpoints', {
  // Specify the other units that are required for this test.
  needs: ['model:endpoint']
});
//
//test('test ajax call', function(assert) {
//  expect(1);
//  var route =  this.subject();
//  //need to test whether the rate and endpoints are being returned properly
//  var model =  route.get('model');
//  debugger;
//  assert.equal(model, {rate: "aslfdka", endpoints: "alskdfj"});
//});
