// import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import sinon from 'sinon';
import BundleObject from '../../helpers/bundle-object';

moduleForComponent('bundle-select-option', 'Unit | Component | bundle select option', { unit: true });

test('didReceiveAttrs', function(assert) {
  assert.throws(() => this.subject(),
    'it should throw an error is option and bundle are not provided')
});

test('didInsertElement', function(assert) {
  const option = { foo: 'bar' };

  const bundle = BundleObject.create({
    registerOptionAction: sinon.spy()
  });

  const component = this.subject({
    option: option,
    bundle: bundle
  });

  component.didInsertElement();

  assert.ok(bundle.registerOptionAction.called,
    'it should call bundle.registerOptionAction');

  assert.ok(bundle.registerOptionAction.calledWith(option),
    'it should call bundle.registerOptionAction with option');
});

test('didDestroyElement', function(assert) {
  const option = { foo: 'bar' };

  const bundle = BundleObject.create({
    unregisterOptionAction: sinon.spy()
  });

  const component = this.subject({
    option: option,
    bundle: bundle
  });

  component.didDestroyElement();

  assert.ok(bundle.unregisterOptionAction.called,
    'it should call bundle.unregisterOptionAction');

  assert.ok(bundle.unregisterOptionAction.calledWith(option),
    'it should call bundle.unregisterOptionAction with option');
});

test('toggle', function(assert) {
  const option = { foo: 'bar' };

  const bundle = BundleObject.create({
    toggleAction: sinon.spy(),
  });

  const component = this.subject({
    option: option,
    bundle: bundle
  });

  component.send('toggle');

  assert.ok(bundle.toggleAction.called);
});

test('isSelected', function(assert) {
  const option = { foo: 'bar' };

  const bundle = BundleObject.create();

  const component = this.subject({
    option: option,
    bundle: bundle
  });

  component.set('option', option);

  assert.equal(component.get('isSelected'), false);
});
