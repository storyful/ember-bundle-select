import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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
