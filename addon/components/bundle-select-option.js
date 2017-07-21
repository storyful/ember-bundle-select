import Ember from 'ember';
import layout from '../templates/components/bundle-select-option';

const { get, computed } = Ember;

export default Ember.Component.extend({

  layout,

  isSelected: computed('group.[]', function(){
    return this.get('group').indexOf(this.get('option')) > -1;
  }),

  actions: {
    toggle(){
      return this.get('isSelected') ?
             this.get('group').removeObject( get(this, 'option') ) :
             this.get('group').pushObject( get(this, 'option') );
    }
  }

});
