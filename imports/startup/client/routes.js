import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

// Import to load these templates
import '../../ui/layouts/app-layout.js';
import '../../ui/pages/login';
import '../../ui/pages/dashboard.js';
import '../../ui/pages/create-article.js';
import '../../ui/pages/all-articles.js';

const exposed = FlowRouter.group({});

export let redirectAfterLogin = '/';

const loggedIn = FlowRouter.group({
    triggersEnter: [(context, redirect) => {
        if (!Meteor.loggingIn() && !Meteor.userId()) {
            const route = FlowRouter.current();
            if (route.route.name !== 'login') {
                redirectAfterLogin = route.path;
            }
            redirect('/login');
        }
    }]
});

exposed.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('appLayout', { main: 'login' });
    }
});

loggedIn.route('/', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('appLayout', { main: 'dashboard' });
    }
});

loggedIn.route('/createArticle', {
    name: 'createArticle',
    action() {
        BlazeLayout.render('appLayout', { main: 'createArticle' });
    }
});

loggedIn.route('/allArticles', {
    name: 'allArticles',
    action() {
        BlazeLayout.render('appLayout', { main: 'allArticles' });
    }
});

loggedIn.route('/logout', {
    name: 'logout',
    action() {
        Meteor.logout(() => {
            FlowRouter.go(FlowRouter.path('login'));
        });
    }
});