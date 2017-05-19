import { Meteor } from 'meteor/meteor';
import {meteorBaseFactory} from '../../../infrastructure/meteor-base-factory';


Meteor.publish('articles', function() {
    return meteorBaseFactory.getArticleRepository().fetchAllArticles();
});