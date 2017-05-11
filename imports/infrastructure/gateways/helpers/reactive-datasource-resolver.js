import { ReactiveVar } from 'meteor/reactive-var';

export class ReactiveDataSourceResolver {

    constructor() {
        this.initiated = false;
        this.reactiveResult = null;
    }

    resolve(asyncQuery, initialValue = []) {
        if (!this.reactiveResult) {
            this.reactiveResult = new ReactiveVar(initialValue);
        }
        if (!this.initiated) {
            asyncQuery()
                .then(result => {
                    this.reactiveResult.set(result);
                    this.initiated = true;
                });
        }
        return this.reactiveResult.get();
    }
}