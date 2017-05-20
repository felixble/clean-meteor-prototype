import { Mongo } from 'meteor/mongo';
import {ArticleState} from '../../core/entities/article-state';
import {Article} from '../../core/entities/article';

const ArticleCollection = new Mongo.Collection('articles', {
    transform: (doc) => {
        const article = new Article();
        article.name = doc.name;
        article.state = doc.state;
        article.listId = doc.listId;
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

    fetchAllArticles(listId) {
        return this.collection.find({ listId: listId });
    }

    fetchRequiredArticles(listId) {
        return this.collection.find({ state: ArticleState.REQUIRED, listId: listId });
    }

    fetchAvailableArticles(listId) {
        return this.collection.find({ state: ArticleState.AVAILABLE, listId: listId });
    }

    updateArticle(article) {
        const id = article._id;
        delete article._id;
        return this.collection.update(
            {_id: id},
            {$set: article}
        );
    }

    fetchArticleById(id) {
        return this.collection.findOne({_id: id});
    }

}