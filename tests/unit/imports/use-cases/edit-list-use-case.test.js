const expect = require('chai').expect;
import {afterEach, beforeEach, describe, it} from 'mocha';
import {EditListUseCase} from '../../../../imports/core/use-cases/edit-list-use-case';
import {mockBaseFactory} from '../../test-helpers/mock-base-factory';

describe('EditListUseCase', () => {
    /** @type {EditListUseCase} */
    let editListUseCase;

    beforeEach('Set up use case and mock repository', () => {
        editListUseCase = new EditListUseCase(mockBaseFactory);
    });

    afterEach('Reset all stubs', () => {
        mockBaseFactory.reset();
    });

    describe('#addArticle', () => {

        it('should call the insert method of the repository', async () => {
            const ARTICLE_NAME = 'Article 4711';
            await editListUseCase.addArticle(ARTICLE_NAME);
            expect(mockBaseFactory.getArticleRepository().insertArticle.calledOnce).to.be.true;
        });

    });

});