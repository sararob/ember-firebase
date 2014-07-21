import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('number'),
  formattedDate: function() {
  	return window.moment(this.get('timestamp')).format('MMMM Do, YYYY h:mm a');
  }.property('timestamp')
});
