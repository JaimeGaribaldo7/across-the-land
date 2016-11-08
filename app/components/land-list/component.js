import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['land'],
form: {
  text: null,
  done: false
},
actions: {
  togglePlaceDone (place) {
    return this.sendAction('togglePlaceDone', place);
  },
  deletePlace (place) {
    return this.sendAction('deletePlace', place);
  },
  createPlace () {
    let newPlace = this.get('form');
    newPlace.list = this.get('list');
    this.sendAction('createPlace', newPlace);
    this.set('form.text', null);
  },
  edit () {
    this.sendAction('edit', this.get('list'));
  }
},
});
