import { Template } from 'meteor/templating';
import './dashboard.html';
import '../components/article-list';
import {EditListGateway} from '../../gateways/edit-list-gateway';

const editListGateway = new EditListGateway();

Template.dashboard.helpers({

    getRequiredArticles() {
        return editListGateway.listRequiredArticles();
    },

    getAvailableArticles() {
        return editListGateway.listAvailableArticles();
    }

});