import { Template } from 'meteor/templating';
import './create-article.html';
import {EditListGateway} from '../../gateways/edit-list-gateway';

Template.createArticle.events({
    'submit #createArticleForm': (evt, tmpl) => {
        evt.preventDefault();
        const name = tmpl.find('#name').value;
        EditListGateway.addArticle(name);
    }
});