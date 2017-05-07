import {mockArticleRepository} from './repositories/mock-article-repository';

export const mockBaseFactory = {

    getArticleRepository: () => {
        return mockArticleRepository;
    },

    reset() {
        this.getArticleRepository().reset();
    }

};