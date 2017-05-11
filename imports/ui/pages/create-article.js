import { Template } from 'meteor/templating';
import './create-article.html';
import {editListGateway} from '../../infrastructure/use-case-gateways';

Template.createArticle.events({
    'submit #createArticleForm': (evt, tmpl) => {
        evt.preventDefault();
        const name = tmpl.find('#name').value;
        editListGateway.addArticle(name);
    }
});