import Ember from 'ember';

export default Ember.Controller.extend({

  models: [
    { name: 'Wasp', level: 1 },
    { name: 'Ant-Man', level: 1 },
    { name: 'Hulk', level: 3 },
    { name: 'Thor', level: 3 },
    { name: 'Iron Man', level: 2 },
    { name: 'Captain America', level: 2 }
  ]

});
