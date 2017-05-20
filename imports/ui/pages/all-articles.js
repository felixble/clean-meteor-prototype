import { Template } from 'meteor/templating';
import './all-articles.html';
import '../components/article-list';
import {GatewayFactory} from '../../infrastructure/use-case-gateways';


Template.allArticles.onCreated(function () {
    this.editListGateway = GatewayFactory.createEditListGateway();
});

Template.allArticles.helpers({
    getArticles: () => {
        const tmpl = Template.instance();
        return tmpl.editListGateway.listAllArticles();
    }
});