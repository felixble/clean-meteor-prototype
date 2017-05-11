import './app-layout.html';
import '../components/navigation';

import { Template } from 'meteor/templating';

Template.appLayout.onCreated(function() {
    this.subscribe('articles');
});