import { Mongo } from 'meteor/mongo';
import {ArticleRepository} from '../../core/repositories/article-repository';
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

    async updateArticle(article) {
        const id = article._id;
        delete article._id;
        return ArticleCollection.update(
            {_id: id},
            {$set: article}
        );
    }

    async fetchArticleById(id) {
        return ArticleCollection.findOne({_id: id});
    }

}