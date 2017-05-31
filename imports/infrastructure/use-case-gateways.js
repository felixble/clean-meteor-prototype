import {EditListUseCase} from '../core/use-cases/edit-list-use-case';
import {meteorBaseFactory} from './meteor-base-factory';
import {MeteorGateway} from './gateways/meteor-gateway';
import {ShoppingUseCase} from '../core/use-cases/shopping-use-case';

const editListUseCase = new EditListUseCase(meteorBaseFactory);
const shoppingUseCase = new ShoppingUseCase(meteorBaseFactory);

export const GatewayFactory = {
    createEditListGateway() {
        return new MeteorGateway(
            editListUseCase, {
                addArticle: 'articles.insert'
            });
    },
    createShoppingGateway() {
        return new MeteorGateway(
            shoppingUseCase, {toggleArticleRequired: 'articles.toggleRequired'});
    }
};