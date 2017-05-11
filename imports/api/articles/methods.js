import { Meteor } from 'meteor/meteor';
import {EditListUseCase} from '../../core/use-cases/edit-list-use-case';
import {meteorBaseFactory} from '../../infrastructure/meteor-base-factory';
import {ShoppingUseCase} from '../../core/use-cases/shopping-use-case';

const editListUseCase = new EditListUseCase(meteorBaseFactory);
const shoppingUseCase = new ShoppingUseCase(meteorBaseFactory);

Meteor.methods({
    'articles.insert': async (name) => {
        await editListUseCase.addArticle(name);
    },
    'articles.toggleRequired': async (articleId) => {
        await shoppingUseCase.toggleArticleRequired(articleId);
    }
});