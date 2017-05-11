import { Meteor } from 'meteor/meteor';
import './helpers/promisedMethods';

export class MeteorGateway {

    constructor(useCase, optionsObject) {
        this.useCase = useCase;
        this.optionsObject = optionsObject;
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
        throw new Error('not-implemented', name);
    }
}