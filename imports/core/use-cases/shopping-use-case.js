
export class ShoppingUseCase {

    /**
     * @param factory {BaseFactory}
     */
    constructor(factory) {
        this.factory = factory;
    }

    async toggleArticleRequired(articleId) {
        const articleRepository = this.factory.getArticleRepository();
        let article = await articleRepository.fetchArticleById(articleId);
        article.toggleState();
        await articleRepository.updateArticle(article);
    }

}