import { Template } from 'meteor/templating';
import './dashboard.html';
import '../components/article-list';
import { GatewayFactory } from '../../infrastructure/use-case-gateways';


Template.dashboard.onCreated(function() {
    this.editListGateway = GatewayFactory.createEditListGateway();
});

Template.dashboard.helpers({

    getRequiredArticles() {
        const tmpl = Template.instance();
        return tmpl.editListGateway.listRequiredArticles();
    },

    getAvailableArticles() {
        const tmpl = Template.instance();
        return tmpl.editListGateway.listAvailableArticles();
    }

});