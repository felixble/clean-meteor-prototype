import {UseCase} from './use-case';

export class ShoppingUseCase extends UseCase{

    /**
     * @param factory {BaseFactory}
     */
    constructor(factory) {
        super(factory);
    }

    async toggleArticleRequired(articleId) {
        this._checkUserIsAuthenticated();

        const articleRepository = this.factory.getArticleRepository();
        let article = await articleRepository.fetchArticleById(articleId);
        article.toggleState();
        await articleRepository.updateArticle(article);
    }

}