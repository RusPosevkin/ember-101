import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      var a = controller.get('model');
      a.rollbackAttributes();
    }
  }
});
