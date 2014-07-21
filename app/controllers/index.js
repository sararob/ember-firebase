import Ember from 'ember';

export default Ember.ArrayController.extend({
	init: function() {
		this.set('message', Ember.Object.create());
	},
	sortProperties: ['timestamp'],
	sortAscending: false,
	actions: {
		addMessage: function() {
			//add the message to Firebase
			var newMessage = this.store.createRecord('message', {
				name: this.get('message.name'),
				body: this.get('message.body'),
				timestamp: new Date()
			});
			newMessage.save();
			this.setProperties({
				'message.body':''
			});
		}
	}
});
