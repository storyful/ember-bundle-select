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
    this.set('relationships', A());
    this.set('selected', A());
  },

  actions: {
    registerOption(option, parent){
      get(this, 'options').pushObject( option );
      (parent) && this.registerParentOption(option, parent);
    },

    registerRelationthip(option, parent){
      get(this, 'relationships').pushObject( { option, parent } )
    },

    unregisterOption(option){
      get(this, 'options').removeObject( option );
      this.isSelected(option) ? this.send('deselectOptions', [option]) : null;
    },

    selectOptions(options){
      get(this, 'selected').pushObjects( options );
    },

    deselectOptions(options){
      get(this, 'selected').removeObjects( options );
    },

    selectAll(){
      this.set('selected', A(this.get('options').copy()) );
    },

    selectNone(){
      this.get('selected').clear();
    },

    toggle(option){
      const options = this.getOptions(option);

      return this.isSelected(option)  ?
             this.send('deselectOptions', options) :
             this.send('selectOptions', options);
    }
  },

  isEmpty: computed.empty('selected'),

  isSelected(option){
    return this.get('selected').indexOf( option ) > -1;
  },

  getOptions(option) {
    const children = get(this, 'relationships')
      .filter((relationship) => option.toString() == relationship.parent.toString())
      .map((relationship) => relationship.option);

    return [option, ...children];
  }

});
