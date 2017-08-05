import Ember from 'ember';
import layout from '../templates/components/bundle-select-group';

const {
  computed,
  get,
  A
} = Ember;

export default Ember.Component.extend({

  layout,

  init(){
    this._super(...arguments);
    this.set('options', A());
    this.set('selected', A());
  },

  actions: {
    registerOption(option){
      get(this, 'options').pushObject( option );
    },

    unregisterOption(option){
      this.isSelected(option) ? this.send('deselectOption', option) : null;
      get(this, 'options').removeObject( option );
    },

    selectOption(option){
      get(this, 'selected').pushObject( option );
    },

    deselectOption(option){
      get(this, 'selected').removeObject( option );
    },

    selectAll(){
      this.set('selected', A(this.get('options').copy()) );
    },

    selectNone(){
      this.get('selected').clear();
    },

    toggle(option){
      return this.isSelected(option)  ?
             this.send('deselectOption', option) :
             this.send('selectOption', option);
    }
  },

  isEmpty: computed.empty('selected'),

  isSelected(option){
    return this.get('selected').indexOf( option ) > -1;
  }

});
