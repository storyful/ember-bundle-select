import {
  moduleForComponent,
  test,
  skip
} from 'ember-qunit';
// import Ember from 'ember';
// const { run } = Ember;

moduleForComponent('bundle-select-option', 'Unit | Component | bundle select option', { unit: true });

skip('didReceiveAttrs');
skip('didInsertElement');
skip('willDestroyElement');
skip('toggle');

test('isSelected', function(assert) {
  const option = { foo: 'bar' };

  const bundle = {
    selected: [],
    options: [],
    isEmpty: true,
    toggleAction: () => {},
    registerOptionAction: () => {},
    unregisterOptionAction: () => {},
    selectAllAction: () => {},
    selectNoneAction: () => {}
  };

  const component = this.subject({
    option: option,
    bundle: bundle
  });

  component.set('option', option);

  assert.equal(component.get('isSelected'), false);
});
