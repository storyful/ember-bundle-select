import { empty } from '@ember/object/computed';
import Component from '@ember/component';
import { get } from '@ember/object';
import { A } from '@ember/array';
import layout from '../templates/components/bundle-select-group';

export default Component.extend({

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
      (parent) && this.registerRelationship(option, parent);
    },

    unregisterOption(option){
      get(this, 'options').removeObject( option );
      this.unregisterRelationships(option);
      this.isSelected(option) ? this.send('deselectOptions', [option]) : null;
    },

    selectOptions(options){
      if(get(this, 'selected')) {
        get(this, 'selected').pushObjects( options );
      }
    },

    deselectOptions(options){
      if(get(this, 'selected')) {
        get(this, 'selected').removeObjects( options );
      }
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

  isEmpty: empty('selected'),

  isSelected(option){
    return this.get('selected').indexOf( option ) > -1;
  },

  getOptions(option) {
    const children = get(this, 'relationships')
      .filter(relationship => option.toString() == relationship.parent.toString())
      .map(relationship => relationship.option);

    return [option, ...children];
  },

  registerRelationship(option, parent){
    get(this, 'relationships').pushObject( { option, parent } )
  },

  unregisterRelationships(option) {
    const relationships = get(this, 'relationships').filter(relationship => {
      return (option.toString() == relationship.option.toString() ||
              option.toString() == relationship.parent.toString());
    });
    (relationships.length) && get(this, 'relationships').removeObjects( relationships );
  }

});
