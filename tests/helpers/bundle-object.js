import Ember from 'ember';

export default Ember.Object.extend({
  selected: [],
  options: [],
  isEmpty: true,
  toggleAction: () => {},
  registerOptionAction: () => {},
  unregisterOptionAction: () => {},
  selectAllAction: () => {},
  selectNoneAction: () => {}
});
