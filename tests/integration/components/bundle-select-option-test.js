import { run } from '@ember/runloop';
import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import BundleObject from '../../helpers/bundle-object';

module('Integration | Component | bundle select option', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('bundle', BundleObject.create());

    this.set('option', {});

    // Template block usage:
    await render(hbs`
      {{#bundle-select-option bundle=bundle option=option}}
        template block text
      {{/bundle-select-option}}
    `);

    assert.dom('*').hasText('template block text');
  });

  test('it handles toggleAction', async function(assert) {
    this.set('bundle', BundleObject.create({
      toggleAction: sinon.spy()
    }));

    this.set('option', {});

    // Template block usage:
    await render(hbs`
      {{#bundle-select-option bundle=bundle option=option as |bundleOption|}}
        <button onclick={{action bundleOption.toggleAction}} data-test-toggle="true">Toggle</button>
      {{/bundle-select-option}}
    `);

    run(() => document.querySelector('[data-test-toggle]').click());

    assert.ok(this.get('bundle.toggleAction').calledOnce);
  });

  // test('it handles unregisterOptionAction', async function(assert) {
  //   const option = { foo: 'bar' };

  //   this.set('bundle', BundleObject.create({
  //     unregisterOptionAction: sinon.spy()
  //   }));

  //   this.set('option', option);
  //   this.set('visible', true);

  //   // Template block usage:
  //   await render(hbs`
  //     {{#if visible}}
  //       {{bundle-select-option bundle=bundle option=option}}
  //     {{/if}}
  //   `);

  //   this.set('visible', false);

  //   assert.ok(this.get('bundle.unregisterOptionAction').calledOnce);
  // });

  skip('it handles parent option', function(assert) {
    const parentOption = { foo: 'parent', parent: null  };
    const childOption = { foo: 'child', parent: parentOption };

    this.set('bundle', BundleObject.create());
    this.set('option', childOption);
    this.set('parent', parentOption);

    // Template block usage:
    this.render(hbs`
      {{bundle-select-option bundle=bundle option=option parentOption=parent}}
    `);

    assert.ok(true);
  });
});
