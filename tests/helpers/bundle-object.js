import EmberObject from '@ember/object';

export default EmberObject.extend({
  selected: Object.freeze([]),
  options: Object.freeze([]),
  isEmpty: true,
  toggleAction: () => {},
  registerOptionAction: () => {},
  unregisterOptionAction: () => {},
  selectAllAction: () => {},
  selectNoneAction: () => {}
});
