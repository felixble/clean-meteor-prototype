import { Meteor } from 'meteor/meteor';
import _ from 'underscore';
import './helpers/promisedMethods';
import {ReactiveDataSourceResolver} from './helpers/reactive-datasource-resolver';

export class MeteorGateway {

    constructor(useCase, optionsObject) {
        this.useCase = useCase;
        this.optionsObject = optionsObject;
        this.resolverMap = {};
        this.init();
    }

    init() {
        Object.getOwnPropertyNames(Object.getPrototypeOf(this.useCase)).forEach((propertyName) => {
            if (typeof this.useCase[propertyName] !== 'function') return;
            if (propertyName === 'constructor' || propertyName.startsWith('_')) return;
            this[propertyName] = this._buildMethod(propertyName);
        });
    }

    _buildMethod(name) {
        if (this.optionsObject[name]) {
            return this._buildWritableMethod(name);
        } else {
            return this._buildReadableMethod(name);
        }
    }

    _buildWritableMethod(name) {
        return (...args) => {
            return Meteor.callPromise(this.optionsObject[name], ...args);
        };
    }

    _buildReadableMethod(name) {
        return () => {
            const resolver = this._getResolverByName(name);
            return resolver.resolve(_.bind(this.useCase[name], this.useCase));
        };
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