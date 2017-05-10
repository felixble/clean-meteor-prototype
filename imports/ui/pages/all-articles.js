import { Template } from 'meteor/templating';
import './all-articles.html';
import {EditListGateway} from '../../gateways/edit-list-gateway';
import { ArticleState } from '/imports/core/entities/article-state';

const editListGateway = new EditListGateway();

Template.allArticles.onRendered(function () {
});

Template.allArticles.helpers({
    getArticles: () => {
        return editListGateway.listAllArticles();
    },

    checkRequiredArticles: (article) => {
        return (article.state === ArticleState.REQUIRED) ? '' : 'checked';
    }
});