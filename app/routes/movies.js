import Route from '@ember/routing/route';

export default Route.extend({
model() {

       let model_obj = {
           movies: this.store.findAll('movie'),
           upcoming: this.store.findAll('upcoming')
       };

       return model_obj;

   },
   actions : {
		transitionToDetailsUpcoming(upcoming){
			return this.transitionTo('details',upcoming.get('id'));
   		},
   		transitionToDetailsTrending(movies){
			return this.transitionTo('details',movies.get('id'));
   		}
	}


});

