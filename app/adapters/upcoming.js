import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host:'https://api.themoviedb.org/',
	namespace:'3/movie/upcoming',
	buildURL(){
		return this.host + this.namespace + "?api_key=443b8a9db84b14a6bd819a162710ccd8&language=en-US&page=1";
	}
});
