import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('list', params.list_id);
},
actions: {
  togglePlaceDone (place) {
    place.toggleProperty('done');
    place.save();
  },
  deletePlace (place) {
    place.destroyRecord();
  },
  createItem (newPlace) {
    let place = this.get('store').createRecord('place', newPlace);
    place.save();
  },
  edit (list) {
    this.transitionTo('list.edit', list);
  }
}
});
