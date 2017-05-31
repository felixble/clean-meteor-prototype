import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { AccountsTemplates } from 'meteor/useraccounts:core';


export let redirectAfterLogin = '/';

AccountsTemplates.configure({
    // Hooks
    onSubmitHook: (error, state) => {
        if (error) return;
        if (state !== 'signIn') return;
        FlowRouter.go(redirectAfterLogin);
    }
});

const redirectIfNotLoggedIn = (redirect) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        const route = FlowRouter.current();
        if (route.route && route.route.name !== 'login') {
            redirectAfterLogin = route.path;
        }
        redirect('/login');
    }
};

Tracker.autorun(function() {
    redirectIfNotLoggedIn((path) => {
        if (FlowRouter.current().route) {
            FlowRouter.go(path);
        }
    });
});


export const exposed = FlowRouter.group({});

export const loggedIn = FlowRouter.group({
    triggersEnter: [(context, redirect) => {
        redirectIfNotLoggedIn(redirect);
    }]
});