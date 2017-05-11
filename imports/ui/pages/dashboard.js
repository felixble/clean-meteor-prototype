import { Template } from 'meteor/templating';
import './dashboard.html';
import '../components/article-list';
import {editListGateway} from '../../infrastructure/use-case-gateways';

Template.dashboard.helpers({

    getRequiredArticles() {
        return editListGateway.listRequiredArticles();
    },

    getAvailableArticles() {
        return editListGateway.listAvailableArticles();
    }

});