import { Meteor } from 'meteor/meteor';
import './helpers/promisedMethods';
import {EditListUseCase} from '../core/use-cases/edit-list-use-case';
import {meteorBaseFactory} from '../infrastructure/meteor-base-factory';
import _ from 'underscore';
import {ReactiveDataSourceResolver} from './helpers/reactive-datasource-resolver';


export class EditListGateway {

    constructor() {
        this.editListUseCase = new EditListUseCase(meteorBaseFactory);
        this.resolverMap = {};
    }

    static async addArticle(name) {
        return Meteor.callPromise('articles.insert', { name: name });
    }

    listAllArticles() {
        const resolver = this._getResolverByName('listAllArticles');
        return resolver.resolve(_.bind(this.editListUseCase.listAllArticles, this.editListUseCase));
    }

    /**
     * @return {ReactiveDataSourceResolver}
     * @private
     */
    _getResolverByName(name) {
        if (!this.resolverMap[name]) {
            this.resolverMap[name] = new ReactiveDataSourceResolver();
        }
        return this.resolverMap[name];
    }

}