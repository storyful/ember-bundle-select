import Ember from 'ember';
import layout from '../templates/components/bundle-select-group';

const { A } = Ember;

export default Ember.Component.extend({

  layout,

  init(){
    this._super(...arguments);
    this.set('group', A());
  }

});
