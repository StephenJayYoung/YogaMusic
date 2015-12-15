import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	 this.route('about', { path: '/about' });
	 this.route('login', { path: '/login' });
	 this.route('musicians', { path: '/musicians' });
});

export default Router;
