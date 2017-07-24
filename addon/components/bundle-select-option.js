import Ember from 'ember';
import layout from '../templates/components/bundle-select-option';

const { computed, get, assert, isPresent } = Ember;

export default Ember.Component.extend({

  layout,

  didReceiveAttrs(){
    assert(
      '{{bundle-select-option}} requires a valid bundle object',
      isPresent( get(this, 'bundle') ));

    this._super(...arguments);
  },

  didInsertElement(){
    get(this, 'bundle.registerOptionAction')( get(this, 'option') )
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
    return get(this, 'toggleOnClick') ? this.send('toggle') : null;
  },

  isSelected: computed('bundle.selected.[]', function(){
    return get(this, 'bundle.selected').indexOf( get(this, 'option')) > -1;
  }),


});
