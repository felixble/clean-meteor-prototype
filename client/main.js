"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var templating_1 = require("meteor/templating");
var reactive_var_1 = require("meteor/reactive-var");
require("./main.html");
function getTemplateProperty(tmpl, property) {
    return tmpl[property];
}
templating_1.Template.hello.onCreated(function helloOnCreated() {
    this.counter = new reactive_var_1.ReactiveVar(0);
});
templating_1.Template.hello.helpers({
    counter: function () {
        return getTemplateProperty(templating_1.Template.instance(), 'counter').get();
    },
});
templating_1.Template.hello.events({
    'click button': function (event, instance) {
        var counter = getTemplateProperty(instance, 'counter');
        counter.set(counter.get() + 1);
    },
});
//# sourceMappingURL=main.js.map