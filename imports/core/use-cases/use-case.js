
export class UseCase {

    /**
     * @param factory {BaseFactory}
     */
    constructor(factory) {
        this.factory = factory;
    }

    _checkUserIsAuthenticated() {
        const authService = this.factory.getAuthService();
        if (!authService.isAuthenticated()) {
            throw new Error('not-authenticated', 'You are not allowed to perform this operation.');
        }
    }

}