import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
  	city: DS.attr(),
 	year: DS.attr(),
  	image: DS.attr()
});
