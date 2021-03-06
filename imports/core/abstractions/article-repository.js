/**
 * @interface ArticleRepository
 */

/**
 * Stores a given article in the repository.
 *
 * @function
 * @name ArticleRepository#insertArticle
 * @param article {Article}
 * @return {Promise}
 */

/**
 * Updates article a given article.
 *
 * @function
 * @name ArticleRepository#updateArticle
 * @param article {Article}
 * @return {Promise.<>}
 */

/**
 * Fetches article by id from the repository.
 *
 * @function
 * @name ArticleRepository#fetchArticleById
 * @param articleId {string}
 * @return {Promise.<Article>}
 */

/**
 * Fetches all articles from the repository
 * associated with the list identified by the
 * given listId
 *
 * @function
 * @name ArticleRepository#fetchAllArticles
 * @param listId {string}
 * @return {Promise.<Article[]>}
 */

/**
 * Fetches all required articles from the repository
 * associated with the list identified by the
 * given listId
 *
 * @function
 * @name ArticleRepository#fetchRequiredArticles
 * @param listId {string}
 * @return {Promise.<Article[]>}
 */

/**
 * Fetches all available articles from the repository
 * associated with the list identified by the
 * given listId
 *
 * @function
 * @name ArticleRepository#fetchAvailableArticles
 * @param listId {string}
 * @return {Promise.<Article[]>}
 */