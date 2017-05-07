import { Meteor } from 'meteor/meteor';
import {EditListUseCase} from '../../core/use-cases/edit-list-use-case';
import {meteorBaseFactory} from '../../infrastructure/meteor-base-factory';

const editListUseCase = new EditListUseCase(meteorBaseFactory);

Meteor.methods({
    'articles.insert': async ({ name }) => {
        await editListUseCase.addArticle(name);
    }
});