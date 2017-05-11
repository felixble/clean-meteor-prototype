import {Article} from '../entities/article';

export class EditListUseCase {

    /**
     * @param factory {BaseFactory}
     */
    constructor(factory) {
        this.factory = factory;
        this.articleRepository = this.factory.getArticleRepository();
    }

    async addArticle(name) {
        // check name ! (assert)
        const article = new Article(name);
        await this.articleRepository.insertArticle(article);
    }

    async listAllArticles() {
        return await this.articleRepository.fetchAllArticles();
    }

    async listRequiredArticles() {
        return await this.articleRepository.fetchRequiredArticles();
    }

    async listAvailableArticles() {
        return await this.articleRepository.fetchAvailableArticles();
    }

}