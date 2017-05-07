import { Meteor } from 'meteor/meteor';
import {EditListUseCase} from '../core/use-cases/edit-list-use-case';
import {meteorBaseFactory} from '../infrastructure/meteor-base-factory';

export class EditListGateway {

    constructor() {
        this.editListUseCase = new EditListUseCase(meteorBaseFactory);
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
        return this.editListUseCase.listAllArticles();
    }

}