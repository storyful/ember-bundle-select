import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bundle-select-group', 'Integration | Component | bundle select group', {
  integration: true
});

skip('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bundle-select-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bundle-select-group}}
      template block text
    {{/bundle-select-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
