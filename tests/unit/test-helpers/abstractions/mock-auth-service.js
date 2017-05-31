import * as sinon from 'sinon';

const isAuthenticatedStub = sinon.stub();
isAuthenticatedStub.returns(true);

const getAssociatedListIdStub = sinon.stub();

export const mockAuthService = {
    isAuthenticated: isAuthenticatedStub,
    getAssociatedListId: getAssociatedListIdStub
};