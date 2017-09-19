import Ember from 'ember';
import layout from '../templates/components/bundle-select-option';

const { computed, get, assert, isPresent } = Ember;

const NS = 'bundle-select-option';

export default Ember.Component.extend({

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

  willDestroyElement(){
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
