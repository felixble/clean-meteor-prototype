import { Template } from 'meteor/templating';
import './create-article.html';
import {EditListGateway} from '../../gateways/edit-list-gateway';

const editListGateway = new EditListGateway();

Template.createArticle.events({
    'submit #createArticleForm': (evt, tmpl) => {
        evt.preventDefault();
        const name = tmpl.find('#name').value;
        editListGateway.addArticle(name);
    }
});