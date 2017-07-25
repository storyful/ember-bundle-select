import {
  moduleForComponent,
  test,
  skip
} from 'ember-qunit';
// import Ember from 'ember';
// const { run } = Ember;

moduleForComponent('bundle-select-group', 'Unit | Component | bundle select group', { unit: true });

test('options', function(assert) {
  let component = this.subject();

  assert.deepEqual(component.get('options'), [],
    'expected options to default to an empty array');
});

test('selected', function(assert) {
  let component = this.subject();

  assert.deepEqual(component.get('selected'), [],
    'expected selected to default to an empty array');
});

test('isEmpty', function(assert) {
  let component = this.subject();

  assert.equal(component.get('isEmpty'), true,
    'expected isEmpty to default to an true');
});

test('registerOption', function(assert) {
  const component = this.subject();
  const option = { foo: 'bar' };

  component.send('registerOption', option);

  assert.deepEqual(component.get('options')[0], option,
    'expected to register option');
});

test('unregisterOption', function(assert) {
  const component = this.subject();
  const option = { foo: 'bar' };

  component.send('registerOption', option);

  assert.deepEqual(component.get('options')[0], option,
    'expected optio to be registred');

  component.send('unregisterOption', option);

  assert.deepEqual(component.get('options')[0], undefined,
    'expected to register option to be unregistred');
});

skip('selectOption')
skip('deselectOption')
skip('selectAll')
skip('selectNone')
skip('toggle')

test('isSelected', function(assert) {
  let component = this.subject();

  assert.equal(component.isSelected({ foo:'bar' }), false,
    'expected to return false if item is not selected');
});
