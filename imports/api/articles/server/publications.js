import { Meteor } from 'meteor/meteor';
import {meteorBaseFactory} from '../../../infrastructure/meteor-base-factory';
import {EditListUseCase} from '../../../core/use-cases/edit-list-use-case';


Meteor.publish('articles', function() {
    //return meteorBaseFactory.getArticleRepository().fetchAllArticles();
    const usecase = new EditListUseCase(meteorBaseFactory.getInstanceWithContext(this));
    let asyncFnWithCallback = (callback) => {
        usecase.listAllArticles()
            .then(res => callback(null, res))
            .catch(err => callback(err));
    };
    let res = Meteor.wrapAsync(asyncFnWithCallback);
    return res();
});