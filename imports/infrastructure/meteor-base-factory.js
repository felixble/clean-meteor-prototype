import { Meteor } from 'meteor/meteor';
import {BaseFactory} from '../core/base-factory';
import {Articles} from '../api/articles/articles';
import {MeteorAuthService} from './meteor-auth-service';

class MeteorBaseFactory extends BaseFactory {

    constructor(context = null) {
        super();
        this.context = (context) ? context : Meteor;
        /** @type {ArticleRepository} */
        this.articleRepository = new Articles();
        this.authService = new MeteorAuthService(this.context);
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

    getInstanceWithContext(context) {
        return new MeteorBaseFactory(context);
    }

}

export const meteorBaseFactory = new MeteorBaseFactory();