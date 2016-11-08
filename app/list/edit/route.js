import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
     save (list) {
      list.save()
       .then((list) => { this.transitionTo('list', list); })
       ;
    },

    cancel (list) {
      list.rollbackAttributes();
      history.back();
    }
  }
});
