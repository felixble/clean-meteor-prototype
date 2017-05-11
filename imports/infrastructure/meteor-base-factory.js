import {BaseFactory} from '../core/base-factory';
import {Articles} from '../api/articles/articles';

class MeteorBaseFactory extends BaseFactory {

    constructor() {
        super();
        /** @type {ArticleRepository} */
        this.articleRepository = new Articles();
    }

    /**
     * @return {ArticleRepository}
     */
    getArticleRepository() {
        return this.articleRepository;
    }

}

export const meteorBaseFactory = new MeteorBaseFactory();