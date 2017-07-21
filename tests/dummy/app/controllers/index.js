import Ember from 'ember';

const { A } = Ember;

export default Ember.Controller.extend({

  models: A([
    Ember.Object.create({ name: 'Wasp', level: 1 }),
    Ember.Object.create({ name: 'Ant-Man', level: 1 }),
    Ember.Object.create({ name: 'Hulk', level: 3 }),
    Ember.Object.create({ name: 'Thor', level: 3 }),
    Ember.Object.create({ name: 'Iron Man', level: 2 }),
    Ember.Object.create({ name: 'Captain America', level: 2 })
  ]),

  actions: {
    levelUp(group){
      return group.forEach(option => option.incrementProperty('level'))
    }
  }

});
