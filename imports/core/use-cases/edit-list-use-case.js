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
        const article = new Article(name, this._getAssociatedListId());
        await this.articleRepository.insertArticle(article);
    }

    async listAllArticles() {
        this._checkUserIsAuthenticated();
        return await this.articleRepository.fetchAllArticles(this._getAssociatedListId());
    }

    async listRequiredArticles() {
        this._checkUserIsAuthenticated();
        return await this.articleRepository.fetchRequiredArticles(this._getAssociatedListId());
    }

    async listAvailableArticles() {
        this._checkUserIsAuthenticated();
        return await this.articleRepository.fetchAvailableArticles(this._getAssociatedListId());
    }

    _getAssociatedListId() {
        const authService = this.factory.getAuthService();
        return authService.getAssociatedListId();
    }
}

