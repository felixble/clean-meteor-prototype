import { ReactiveVar } from 'meteor/reactive-var';

export class ReactiveDataSourceResolver {

    constructor() {
        this.requestScheduled = false;
        this.reactiveResult = null;
    }

    resolve(asyncQuery, initialValue = []) {
        if (!this.reactiveResult) {
            this.reactiveResult = new ReactiveVar(initialValue);
        }
        if (!this.requestScheduled) {
            this.requestScheduled = true;
            asyncQuery()
                .then(result => {
                    this.reactiveResult.set(result);
                })
                .catch((error) => {
                    this.requestScheduled = false;
                    console.error(error);
                });
        }
        return this.reactiveResult.get();
    }
}