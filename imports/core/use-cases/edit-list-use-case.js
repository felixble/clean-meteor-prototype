import {Article} from '../entities/article';

export class EditListUseCase {

    /**
     * @param factory {BaseFactory}
     */
    constructor(factory) {
        this.factory = factory;
    }

    async addArticle(name) {
        const articleRepository = this.factory.getArticleRepository();
        const article = new Article(name);
        await articleRepository.insertArticle(article);
    }

    async listAllArticles() {
        const articleRepository = this.factory.getArticleRepository();
        return articleRepository.fetchAllArticles();
    }

}