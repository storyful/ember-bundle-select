import EmberObject from '@ember/object';
import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({

  newModel: Object.freeze({
    name: null,
    value: null
  }),

  models: A([
    EmberObject.create({ name: 'Avengers', level: 5, children: [
        EmberObject.create({ name: 'Captain America', level: 2 }),
        EmberObject.create({ name: 'Ant-Man', level: 1 }),
        EmberObject.create({ name: 'Hulk', level: 3 }),
        EmberObject.create({ name: 'Thor', level: 3 })
      ]
    }),
    EmberObject.create({ name: 'Wasp', level: 1 }),
    EmberObject.create({ name: 'Ant-Man', level: 1 }),
    EmberObject.create({ name: 'Hulk', level: 3 }),
    EmberObject.create({ name: 'Thor', level: 3 }),
    EmberObject.create({ name: 'Iron Man', level: 2 }),
    EmberObject.create({ name: 'Captain America', level: 2 })
  ]),

  otherModels: A([
    EmberObject.create({ name: 'Hydra', level: 5, children: [
        EmberObject.create({ name: 'Red Skull', level: 2 }),
        EmberObject.create({ name: 'Baron Zemo', level: 1 }),
        EmberObject.create({ name: 'Arnim Zola', level: 3 })
      ]
    }),
    EmberObject.create({ name: 'Ultron', level: 10 }),
    EmberObject.create({ name: 'Thanos', level: 100 }),
    EmberObject.create({ name: 'Loki', level: 50 })
  ]),

  actions: {
    levelUp(group){
      return group.forEach( option => option.incrementProperty('level') );
    },
    create(){
      const newModel = EmberObject.create(this.get('newModel'));

      this.get('models').pushObject( newModel );

      this.set('newModel.name', null);
      this.set('newModel.level', null);
    },
    toggleHiddenOptions(){
      this.toggleProperty('showHiddenOptions');
    }
  }

});
