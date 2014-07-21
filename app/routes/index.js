import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		//Add model hook
		return this.store.findAll('message');	
	}

});
