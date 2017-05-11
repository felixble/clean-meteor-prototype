import { Template } from 'meteor/templating';
import './article-list.html';
import {MeteorGateway} from '../../gateways/meteor-gateway';
import {ShoppingUseCase} from '../../core/use-cases/shopping-use-case';
import {meteorBaseFactory} from '/imports/infrastructure/meteor-base-factory';

const shoppingUseCase = new ShoppingUseCase(meteorBaseFactory);
const shoppingGateway = new MeteorGateway(shoppingUseCase, {toggleArticleRequired: 'articles.toggleRequired'});

Template.articleList.helpers({
    getArticles() {
        return Template.instance().data;
    },

    checkArticle(article) {
        return (article.isAvailable()) ? 'checked' : '';
    }
});

Template.articleList.events({
    'change .toggleArticle'(evt) {
        evt.preventDefault();
        shoppingGateway.toggleArticleRequired(this._id);
    }
});