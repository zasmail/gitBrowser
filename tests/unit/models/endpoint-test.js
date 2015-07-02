import { moduleFor, test } from 'ember-qunit';

moduleFor('model:endpoint');
//test('it exists', function(assert) {
//  var model = this.subject();
//  // var store = this.store();
//  assert.ok(!!model);
//});

test('urlSegments break down URL properly', function (assert) {
  var model = this.subject({
    url:  "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
    name: "repository_search_url"
  });
  var segments = model.get('urlSegments');
  var expected = ["https://api.github.com/search/repositories?q=", "{query}", "{&page,per_page,sort,order}"];
  assert.equal(segments, expected);
});
