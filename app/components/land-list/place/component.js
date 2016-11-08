import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listPlaceCompleted'],
  listPlaceCompleted: Ember.computed.alias('place.done'),
  actions: {
    toggleDone () {
      return this.sendAction('toggleDone', this.get('place'));
    },
    delete () {
      return this.sendAction('delete', this.get('place'));
    }
  },
});
