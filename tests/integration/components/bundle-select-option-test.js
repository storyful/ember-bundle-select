import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bundle-select-option', 'Integration | Component | bundle select option', {
  integration: true
});

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bundle-select-option}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bundle-select-option}}
      template block text
    {{/bundle-select-option}}
  `);

  // assert.throws(render, 'raises an error');
  // assert.equal(this.$().text().trim(), 'template block text');
});
