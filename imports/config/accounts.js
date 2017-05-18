import { AccountsTemplates } from 'meteor/useraccounts:core';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { redirectAfterLogin } from '../startup/client/routes';

AccountsTemplates.configure({
    // Hooks
    onSubmitHook: (error, state) => {
        if (error) return;
        if (state !== 'signIn') return;
        FlowRouter.go(redirectAfterLogin);
    }
});