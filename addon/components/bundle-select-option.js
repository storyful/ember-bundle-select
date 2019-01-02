import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/bundle-select-option';

const NS = 'bundle-select-option';

export default Component.extend({

  layout,

  didReceiveAttrs(){
    assert(
      `${NS} requires a valid bundle object`,
      isPresent( get(this, 'bundle') )
    );

    assert(
      `${NS} requires an option value`,
      isPresent( get(this, 'option') )
    );

    this._super(...arguments);
  },

  didInsertElement(){
    get(this, 'bundle.registerOptionAction')( get(this, 'option'), get(this, 'parentOption') );
  },

  didDestroyElement(){
    get(this, 'bundle.unregisterOptionAction')( get(this, 'option') )
  },

  actions: {
    toggle(){
      return this.get('bundle.toggleAction')( this.get('option') );
    }
  },

  click(e){
    e.stopPropagation();
    get(this, 'toggleOnClick') && this.send('toggle');
  },

  isSelected: computed('bundle.selected.[]', function(){
    return get(this, 'bundle.selected').indexOf( get(this, 'option')) > -1;
  })

});
