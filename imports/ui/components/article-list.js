import { Template } from 'meteor/templating';
import './article-list.html';

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

    }
});