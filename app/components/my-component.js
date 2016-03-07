import Ember from 'ember';

export default Ember.Component.extend({
  things: [],
  actions: {
    addThing: function() {
      this.get('things').pushObject(Ember.Object.create({
        text: 'a thing'
      }));
    }
  }
});
