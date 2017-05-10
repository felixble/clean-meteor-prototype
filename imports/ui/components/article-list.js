import { Template } from 'meteor/templating';
import './article-list.html';

Template.articleList.helpers({
    getArticles() {
        return Template.instance().data;
    }
});