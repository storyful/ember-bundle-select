import Ember from 'ember';
import layout from '../templates/components/bundle-select-option';

const { get, observer } = Ember;

export default Ember.Component.extend({

  layout,

  didSelectedChanged: observer('selected', function(){
    const selected  = get(this, 'selected');
    const group     = get(this, 'group');
    const option    = get(this, 'option');

    selected ? this.get('group').pushObject(option) : group.removeObject(option);
  })

});
