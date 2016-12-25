import { Meteor } from 'meteor/meteor';
import { Shows } from '../shows_collection.js'

Meteor.publish('shows', function () {
  return Shows.find();
});

Meteor.publish('singleShow', function (slug) {
  check(slug, String);
  return Shows.find({ slug: slug });
});

Meteor.publish('activeShows', function() {
	return Shows.find({active: true});
});
