import { Template } from 'meteor/templating';
import './create-article.html';
import {GatewayFactory} from '../../infrastructure/use-case-gateways';

Template.createArticle.onCreated(function () {
    this.editListGateway = GatewayFactory.createEditListGateway();
});

Template.createArticle.events({
    'submit #createArticleForm': (evt, tmpl) => {
        evt.preventDefault();
        const name = tmpl.find('#name').value;
        tmpl.editListGateway.addArticle(name);
    }
});