import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-layout.js';
import '../../ui/pages/home.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('appLayout', { main: 'home' });
    }
});