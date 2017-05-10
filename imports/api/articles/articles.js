import { Mongo } from 'meteor/mongo';
import {ArticleRepository} from '../../core/repositories/article-repository';
import {ArticleState} from '../../core/entities/article-state';

const ArticleCollection = new Mongo.Collection('articles');

export class Articles extends ArticleRepository {

    /**
     * @param article {Article}
     */
    async insertArticle(article) {
        return ArticleCollection.insert(article);
    }

    async fetchAllArticles() {
        return ArticleCollection.find();
    }

    async fetchRequiredArticles() {
        return ArticleCollection.find({ state: ArticleState.REQUIRED });
    }

    async fetchAvailableArticles() {
        return ArticleCollection.find({ state: ArticleState.AVAILABLE });
    }

}