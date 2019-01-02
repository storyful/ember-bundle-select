import { module, test } from 'qunit';
// import Ember from 'ember';
import { setupTest } from 'ember-qunit';

module('Unit | Component | bundle select group', function(hooks) {
  setupTest(hooks);

  test('options', function(assert) {
    let component = this.owner.factoryFor('component:bundle-select-group').create();

    assert.equal(component.get('options').length, 0,
      'expected options to default to an empty array');
  });

  test('selected', function(assert) {
    let component = this.owner.factoryFor('component:bundle-select-group').create();

    assert.deepEqual(component.get('selected'), [],
      'expected selected to default to an empty array');
  });

  test('isEmpty', function(assert) {
    let component = this.owner.factoryFor('component:bundle-select-group').create();

    assert.equal(component.get('isEmpty'), true,
      'expected isEmpty to default to an true');
  });

  test('registerOption', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();
    const option = { foo: 'bar' };

    component.send('registerOption', option);

    assert.deepEqual(component.get('options')[0], option,
      'expected to register option');
  });

  test('registerOption with parent', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();
    const parentOption = { foo: 'bar' };
    const option = { foo: 'bar', parentOption };

    component.send('registerOption', option, parentOption);

    assert.deepEqual(component.get('options')[0], option,
      'expected to register option');

    assert.equal(component.get('relationships.length'), 1,
      'expected to register relationship');
  });

  test('registerRelationship', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();

    const parentOption = { foo: 'parent' };
    const childOption = { foo: 'child', parentOption };

    component.registerRelationship(childOption, parentOption);

    assert.equal(component.get('relationships.length'), 1,
      'expected to register relationship');
  });

  test('unregisterOption', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();
    const option = { foo: 'bar' };

    component.send('registerOption', option);
    component.send('selectOptions', [option]);

    assert.deepEqual(component.get('options')[0], option,
      'expected option to be registred');

    assert.deepEqual(component.get('selected')[0], option,
      'expected option to be selected');

    component.send('unregisterOption', option);

    assert.deepEqual(component.get('options')[0], undefined,
      'expected option to be unregistred');

    assert.equal(component.get('selected.length'), 0,
      'expected option not to be selected');
  });

  test('unregisterRelationships', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();

    const option = { foo: 'child' };
    const parentOption = { foo: 'parent' };
    const relationship = { option, parent: parentOption };

    component.get('relationships').pushObject(relationship);

    component.unregisterRelationships(parentOption);

    assert.equal(component.get('relationships').length, 0,
      'expected relationship to be unregistred');
  });

  test('selectOptions', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();
    const option = { foo: 'bar' };

    component.send('registerOption', option);

    assert.deepEqual(component.get('options')[0], option,
      'expected option to be registred');

    assert.equal(component.get('selected.length'), 0,
      'expected option not to be selected');

    component.send('selectOptions', [option]);

    assert.deepEqual(component.get('selected')[0], option,
      'expected option to be selected');
  });

  test('deselectOptions', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();
    const option = { foo: 'bar' };

    component.send('registerOption', option);
    assert.deepEqual(component.get('options')[0], option,
      'expected option to be registred');

    component.send('selectOptions', [option]);
    assert.deepEqual(component.get('selected')[0], option,
      'expected option to be selected');

    component.send('deselectOptions', [option]);

    assert.equal(component.get('selected.length'), 0,
      'expected option not to be selected');
  });

  test('selectAll', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();

    const options = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'foobar' }
    ];

    component.send('registerOption', options[0]);
    component.send('registerOption', options[1]);
    component.send('registerOption', options[2]);

    assert.equal(component.get('options.length'), 3,
      'expected options to be registred');

    assert.equal(component.get('selected.length'), 0,
      'expected options not to be selected');

    component.send('selectAll');
    assert.equal(component.get('selected.length'), 3,
      'expected options to be selected');
  });

  test('selectNone', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();

    const options = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'foobar' }
    ];

    component.send('registerOption', options[0]);
    component.send('registerOption', options[1]);
    component.send('registerOption', options[2]);
    assert.equal(component.get('options.length'), 3,
      'expected options to be registred');

    component.send('selectAll');
    assert.equal(component.get('selected.length'), 3,
      'expected options to be selected');

    component.send('selectNone');
    assert.equal(component.get('selected.length'), 0,
      'expected options to be selected');
  });

  test('toggle', function(assert) {
    const component = this.owner.factoryFor('component:bundle-select-group').create();
    const option = { id: 1, name: 'foo' };

    component.send('registerOption', option);
    assert.deepEqual(component.get('options')[0], option,
      'expected option to be registred');

    component.send('toggle', option);
    assert.deepEqual(component.get('selected')[0], option,
      'expected option to be selected');

    component.send('toggle', option);
    assert.equal(component.get('selected.length'), 0,
      'expected option not to be selected');
  });

  test('isSelected', function(assert) {
    let component = this.owner.factoryFor('component:bundle-select-group').create();

    assert.equal(component.isSelected({ foo:'bar' }), false,
      'expected to return false if item is not selected');
  });

  test('getOptions', function(assert){
    const component = this.owner.factoryFor('component:bundle-select-group').create();

    const parentOption = { id: 1, name: 'foo' };
    const optionA = { id: 1, name: 'foo' };
    const optionB = { id: 1, name: 'foo' };

    component.send('registerOption', optionA, parentOption);
    component.send('registerOption', optionB, parentOption);

    assert.equal(component.getOptions(parentOption).length, 3,
      'expected to return option and its children');
  });

  test('unregisterRelationships', function(assert){
    const component = this.owner.factoryFor('component:bundle-select-group').create();

    const parentOption = { id: 1, name: 'foo' };
    const optionA = { id: 1, name: 'foo' };

    component.send('registerOption', optionA, parentOption);

    assert.equal(component.get('relationships').length, 1,
      'expected to return a relationship');

    component.unregisterRelationships(optionA);

    assert.equal(component.get('relationships').length, 0,
      'expected to return 0 relationships');
  })
});
