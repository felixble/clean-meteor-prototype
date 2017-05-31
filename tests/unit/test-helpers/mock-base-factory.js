import {mockArticleRepository} from './abstractions/mock-article-repository';
import {mockAuthService} from './abstractions/mock-auth-service';

export const mockBaseFactory = {

    getArticleRepository: () => {
        return mockArticleRepository;
    },

    getAuthService: () => {
        return mockAuthService;
    },

    reset() {
        this.getArticleRepository().reset();
    }

};