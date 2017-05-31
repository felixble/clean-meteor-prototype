import { Template } from 'meteor/templating';
import './article-list.html';
import {GatewayFactory} from '../../infrastructure/use-case-gateways';


Template.articleList.onCreated(function () {
    this.shoppingGateway = GatewayFactory.createShoppingGateway();
});

Template.articleList.helpers({
    getArticles() {
        return Template.instance().data;
    },

    checkArticle(article) {
        return (article.isAvailable()) ? 'checked' : '';
    }
});

Template.articleList.events({
    'change .toggleArticle'(evt, tmpl) {
        evt.preventDefault();
        tmpl.shoppingGateway.toggleArticleRequired(this._id);
    }
});