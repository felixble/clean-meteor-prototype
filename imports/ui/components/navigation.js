import './navigation.html';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.navigation.helpers({
    isRouteActive(route) {
        const currentRoute = FlowRouter.getRouteName();
        return (route === currentRoute) ? 'active' : '';
    }
});