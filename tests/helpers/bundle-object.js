import EmberObject from '@ember/object';

export default EmberObject.extend({
  selected: [],
  options: [],
  isEmpty: true,
  toggleAction: () => {},
  registerOptionAction: () => {},
  unregisterOptionAction: () => {},
  selectAllAction: () => {},
  selectNoneAction: () => {}
});
