import { Mongo } from 'meteor/mongo';
import {ArticleState} from '../../core/entities/article-state';
import {Article} from '../../core/entities/article';

const ArticleCollection = new Mongo.Collection('articles', {
    transform: (doc) => {
        const article = new Article();
        article.name = doc.name;
        article.state = doc.state;
        return article;
    }
});

/**
 * @implements {ArticleRepository}
 */
export class Articles {

    constructor() {
        this.collection = ArticleCollection;
    }

    insertArticle(article) {
        return this.collection.insert(article);
    }

    async fetchAllArticles() {
        return this.collection.find();
    }

    async fetchRequiredArticles() {
        return this.collection.find({ state: ArticleState.REQUIRED });
    }

    async fetchAvailableArticles() {
        return this.collection.find({ state: ArticleState.AVAILABLE });
    }

    async updateArticle(article) {
        const id = article._id;
        delete article._id;
        return this.collection.update(
            {_id: id},
            {$set: article}
        );
    }

    async fetchArticleById(id) {
        return this.collection.findOne({_id: id});
    }

}