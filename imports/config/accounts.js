import { AccountsTemplates } from 'meteor/useraccounts:core';


AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');

AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        displayName: 'Username',
        placeholder: {
            signUp: '(min. 3 chars)'
        },
        required: true,
        minLength: 3
    },
    {
        _id: 'password',
        type: 'password',
        placeholder: {
            signUp: 'min. 6 chars (digit, lower & upper)'
        },
        required: true,
        minLength: 6,
        re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        errStr: 'min. 6 chars (min. 1 digit, 1 lower, 1 upper)'
    }
]);
