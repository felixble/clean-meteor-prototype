import {Article} from '../entities/article';
import {UseCase} from './use-case';

export class EditListUseCase extends UseCase {

    /**
     * @param factory {BaseFactory}
     */
    constructor(factory) {
        super(factory);
        this.articleRepository = this.factory.getArticleRepository();
    }

    async addArticle(name) {
        this._checkUserIsAuthenticated();
        // check name ! (assert)
        const article = new Article(name);
        await this.articleRepository.insertArticle(article);
    }

    async listAllArticles() {
        this._checkUserIsAuthenticated();
        return await this.articleRepository.fetchAllArticles();
    }

    async listRequiredArticles() {
        this._checkUserIsAuthenticated();
        return await this.articleRepository.fetchRequiredArticles();
    }

    async listAvailableArticles() {
        this._checkUserIsAuthenticated();
        return await this.articleRepository.fetchAvailableArticles();
    }

}