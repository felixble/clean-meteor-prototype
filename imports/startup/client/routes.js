import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-layout.js';
import '../../ui/pages/home.js';
import '../../ui/pages/create-article.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('appLayout', { main: 'home' });
    }
});

FlowRouter.route('/createArticle', {
    name: 'createArticle',
    action() {
        BlazeLayout.render('appLayout', { main: 'createArticle' });
    }
});