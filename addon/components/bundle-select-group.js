import Ember from 'ember';
import layout from '../templates/components/bundle-select-group';

const { A, computed } = Ember;

export default Ember.Component.extend({

  layout,

  init(){
    this._super(...arguments);
    this.set('options', A());
    this.set('selected', A());
  },

  actions: {
    selectAll(){
      this.set('selected', A(this.get('options').copy()) );
    },

    selectNone(){
      this.get('selected').clear();
    },

    toggle(option){
      return this.get('selected').indexOf( option ) > -1 ?
             this.get('selected').removeObject( option ) :
             this.get('selected').pushObject( option );
    }
  },

  isEmpty: computed.empty('selected')

});
