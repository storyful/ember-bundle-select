import Ember from 'ember';

const { A, copy, setProperties } = Ember;

export default Ember.Controller.extend({

  newModel: {
    name: null,
    value: null
  },

  models: A([
    Ember.Object.create({ name: 'Wasp', level: 1 }),
    Ember.Object.create({ name: 'Ant-Man', level: 1 }),
    Ember.Object.create({ name: 'Hulk', level: 3 }),
    Ember.Object.create({ name: 'Thor', level: 3 }),
    Ember.Object.create({ name: 'Iron Man', level: 2 }),
    Ember.Object.create({ name: 'Captain America', level: 2 })
  ]),

  otherModels: A([
    Ember.Object.create({ name: 'Ultron', level: 10 }),
    Ember.Object.create({ name: 'Thanos', level: 100 }),
    Ember.Object.create({ name: 'Loki', level: 50 })
  ]),

  actions: {
    levelUp(group){
      return group.forEach(option => option.incrementProperty('level'))
    },
    createAvenger(){
      const newModel = this.get('newModel');
      this.get('models').pushObject( copy(newModel) );
      setProperties(newModel, { name: null, level: null });
    },
    toggleVillans(){
      this.toggleProperty('showVillans');
    }
  }

});
