import * as sinon from 'sinon';
import {immediatelyResolvedPromise} from '../stubs';

const insertArticleStub = sinon.stub();
insertArticleStub.returns(immediatelyResolvedPromise);

export const mockArticleRepository = {

    insertArticle: insertArticleStub,

    reset: () => {
        insertArticleStub.reset();
    }

};