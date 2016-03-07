import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-component', 'Integration | Component | my component', {
  integration: true
});

test('it adds some items', function(assert) {
  this.render(hbs`{{my-component}}`);

  this.$('#adder').click();
  this.$('#adder').click();

  assert.equal(this.$('.thing').length, 2, 'should be 2 things');
});

test('it does not still have those items on the next test', function(assert) {
  this.render(hbs`{{my-component}}`);
  // fails
  assert.equal(this.$('.thing').length, 0, 'should be no things to begin with');
});

test('I see if I override the context that it works as expected', function(assert) {
  this.set('things', []);
  this.render(hbs`{{my-component things=things}}`);
  assert.equal(this.$('.thing').length, 0, 'should be no things to begin with');
});
