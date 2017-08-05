import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent('bundle-select-option', 'Integration | Component | bundle select option', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('bundle', {
    selected: [],
    options: [],
    isEmpty: true,
    toggleAction: () => {},
    registerOptionAction: () => {},
    unregisterOptionAction: () => {},
    selectAllAction: () => {},
    selectNoneAction: () => {}
  });

  this.set('option', {});

  // Template block usage:
  this.render(hbs`
    {{#bundle-select-option bundle=bundle option=option}}
      template block text
    {{/bundle-select-option}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});



test('it handles toggleAction', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let toggleAction = sinon.spy();

  this.set('bundle', {
    selected: [],
    options: [],
    isEmpty: true,
    toggleAction,
    registerOptionAction: () => {},
    unregisterOptionAction: () => {},
    selectAllAction: () => {},
    selectNoneAction: () => {}
  });

  this.set('option', {});

  // Template block usage:
  this.render(hbs`
    {{#bundle-select-option bundle=bundle option=option as |bundleOption|}}
      <button onclick={{action bundleOption.toggleAction}} data-test-toggle="true">Toggle</button>
    {{/bundle-select-option}}
  `);

  Ember.run(() => document.querySelector('[data-test-toggle]').click());

  assert.ok(toggleAction.calledOnce);
});

test('it handles unregisterOptionAction', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const unregisterOptionAction = sinon.spy();

  const option = { foo: 'bar' };

  this.set('bundle', {
    selected: [],
    options: [],
    isEmpty: false,
    toggleAction: () => {},
    registerOptionAction: () => {},
    unregisterOptionAction,
    selectAllAction: () => {},
    selectNoneAction: () => {}
  });

  this.set('option', option);
  this.set('visible', true);

  // Template block usage:
  this.render(hbs`
    {{#if visible}}
      {{bundle-select-option bundle=bundle option=option}}
    {{/if}}
  `);

  this.set('visible', false);

  assert.ok(unregisterOptionAction.calledOnce);
});

