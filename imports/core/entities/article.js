import {ArticleState} from './article-state';

export class Article {

    constructor(name) {
        this.name = name;
        this.state = ArticleState.REQUIRED;
    }

}