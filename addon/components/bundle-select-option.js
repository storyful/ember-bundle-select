import Ember from 'ember';
import layout from '../templates/components/bundle-select-option';

const { computed } = Ember;

export default Ember.Component.extend({

  layout,

  isSelected: computed('bundle.selected.[]', function(){
    return this.get('bundle.selected').indexOf(this.get('option')) > -1;
  }),

  didInsertElement(){
    this.get('bundle.options').pushObject( this.get('option') );
  },

  willDestroyElement(){
    this.get('bundle.options').removeObject( this.get('option') );
  },

  actions: {
    toggle(){
      this.get('bundle.toggleAction')( this.get('option') );
    }
  }

});
