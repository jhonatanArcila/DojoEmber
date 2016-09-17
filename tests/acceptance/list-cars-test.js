import { test } from 'qunit';
import moduleForAcceptance from 'dojo-ejemplo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list cars');

test('should redirect to spies route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/list-cars', 'should redirect automatically');
  });
});

test('should list available cars.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });
});
