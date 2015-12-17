import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        let musicians = [
            {
                title: "Musician1",
                complete: false,
            },
            {
                title: "Musician2",
                complete: false,
            },
            {
                title: "Musician3",
                complete: false,
            }
        ];
        return musicians;
    }
});