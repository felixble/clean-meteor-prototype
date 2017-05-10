import { Template } from 'meteor/templating';
import './all-articles.html';
import {EditListGateway} from '../../gateways/edit-list-gateway';
import { ArticleState } from '/imports/core/entities/article-state';
import { ReactiveVar } from 'meteor/reactive-var';

const editListGateway = new EditListGateway();
const reactive = new ReactiveVar([]);

Template.allArticles.onRendered(function () {
    editListGateway.listAllArticles()
        .then(result => {
            reactive.set(result);
        });
});

Template.allArticles.helpers({
    getArticles: () => {
        console.log('getArticles called');
        return reactive.get(); //editListGateway.listAllArticles();
    },

    checkRequiredArticles: (article) => {
        console.log(article);
        return '';
        /// /return (article.state === ArticleState.REQUIRED) ? '' : 'checked';
    }
});