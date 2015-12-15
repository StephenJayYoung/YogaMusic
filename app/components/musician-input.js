import Ember from 'ember';

export default Ember.Component.extend({  
    actions: {
        submitMusician(newMusician) {
            if (newTitle) {
                this.sendAction('action', newTitle);
            }
            this.set('newTitle', '');
        }
    }
});