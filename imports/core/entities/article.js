import {ArticleState} from './article-state';

export class Article {

    constructor(name) {
        this._id = undefined;
        this.name = name;
        this.state = ArticleState.REQUIRED;
    }

}