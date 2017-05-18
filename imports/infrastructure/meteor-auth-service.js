import { Meteor } from 'meteor/meteor';

/**
 * @implements AuthService
 */
export class MeteorAuthService {

    constructor(context = null) {
        this.meteor = Meteor;
        this.context = context;
    }

    isAuthenticated() {
        if (this.context) {
            return !!this.context.userId;
        }
        return (this.meteor.userId());
    }

}