import './login.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { redirectAfterLogin } from '../../startup/client/routes/setup';


Template.login.onCreated(function() {
    this.autorun(function() {
        if (Meteor.userId()) {
            FlowRouter.go(redirectAfterLogin);
        }
    });
});