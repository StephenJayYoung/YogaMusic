import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        let musicians = [
            {
                title: "musician1",
                complete: false,
            },
            {
                title: "Yoga Mystic Music",
                complete: false,
            }
        ];
        return musicians;
    }
});