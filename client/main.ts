import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

function getTemplateProperty(tmpl, property : string) {
  return tmpl[property];
}

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return getTemplateProperty(Template.instance(), 'counter').get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    let counter = getTemplateProperty(instance, 'counter');
    counter.set(counter.get() + 1);
  },
});
