import { Meteor } from 'meteor/meteor';

/**
 * @implements AuthService
 */
export class MeteorAuthService {

    constructor() {
        this.meteor = Meteor;
    }

    isAuthenticated() {
        return (this.meteor.userId());
    }

    getAssociatedListId() {
        return this.meteor.userId();
    }

}