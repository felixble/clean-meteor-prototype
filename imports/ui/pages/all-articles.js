import { Template } from 'meteor/templating';
import './all-articles.html';
import {EditListGateway} from '../../gateways/edit-list-gateway';

const editListGateway = new EditListGateway();

Template.allArticles.onRendered(function () {
});

Template.allArticles.helpers({
    getArticles: () => {
        return editListGateway.listAllArticles();
    }
});