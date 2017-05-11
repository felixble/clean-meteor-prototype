import {ArticleState} from './article-state';

export class Article {

    constructor(name) {
        this.name = name;
        this.state = ArticleState.REQUIRED;
    }

    toggleState() {
        this.state = ArticleState.toggle(this.state);
    }

    isAvailable() {
        return this.state === ArticleState.AVAILABLE;
    }

}