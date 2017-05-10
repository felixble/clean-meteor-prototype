import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import {EditListUseCase} from '../core/use-cases/edit-list-use-case';
import {meteorBaseFactory} from '../infrastructure/meteor-base-factory';

export class EditListGateway {

    constructor() {
        this.editListUseCase = new EditListUseCase(meteorBaseFactory);
        this.allArticlesInit = false;
        this.allArticlesReactive = new ReactiveVar();
    }

    async addArticle(name) {
        return new Promise((resolve, reject) => {
            Meteor.call('articles.insert', { name: name }, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    listAllArticles() {
        if (!this.allArticlesInit) {
            this.editListUseCase.listAllArticles()
                .then((articles) => {
                    this.allArticlesInit = true;
                    this.allArticlesReactive.set(articles);
                });
        }
        return this.allArticlesReactive.get();
    }

}