import {BaseFactory} from '../core/base-factory';
import {Articles} from '../api/articles/articles';
import {MeteorAuthService} from './meteor-auth-service';

class MeteorBaseFactory extends BaseFactory {

    constructor() {
        super();
        /** @type {ArticleRepository} */
        this.articleRepository = new Articles();
        this.authService = new MeteorAuthService();
    }

    /**
     * @return {ArticleRepository}
     */
    getArticleRepository() {
        return this.articleRepository;
    }

    getAuthService() {
        return this.authService;
    }

}

export const meteorBaseFactory = new MeteorBaseFactory();