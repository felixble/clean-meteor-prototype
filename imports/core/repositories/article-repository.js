

export class ArticleRepository {

    /**
     * @param article {Article}
     */
    async insertArticle(article) {
        throw new Error('interface-stub', article);
    }

    async fetchAllArticles() {
        throw new Error('interface-stub');
    }

    async fetchRequiredArticles() {
        throw new Error('interface-stub');
    }

    async fetchAvailableArticles() {
        throw new Error('interface-stub');
    }

    async updateArticle(article) {
        throw new Error('interface-stub', article);
    }

    async fetchArticleById(id) {
        throw new Error('interface-stub', id);
    }

}