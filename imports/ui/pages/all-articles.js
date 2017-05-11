import { Template } from 'meteor/templating';
import './all-articles.html';
import '../components/article-list';
import {editListGateway} from '../../infrastructure/use-case-gateways';


Template.allArticles.onRendered(function () {
});

Template.allArticles.helpers({
    getArticles: () => {
        return editListGateway.listAllArticles();
    }
});