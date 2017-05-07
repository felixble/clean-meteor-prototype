import { Mongo } from 'meteor/mongo';
import {ArticleRepository} from '../../core/repositories/article-repository';

const ArticleCollection = new Mongo.Collection('articles');

export class Articles extends ArticleRepository {

    /**
     * @param article {Article}
     */
    async insertArticle(article) {
        return ArticleCollection.insert(article);
    }

}