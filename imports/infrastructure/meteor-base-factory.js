import {BaseFactory} from '../core/base-factory';
import {Articles} from '../api/articles/articles';

class MeteorBaseFactory extends BaseFactory {

    constructor() {
        super();
        this.articleRepository = new Articles();
    }

    getArticleRepository() {
        return this.articleRepository;
    }

}

export const meteorBaseFactory = new MeteorBaseFactory();