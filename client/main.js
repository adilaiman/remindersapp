import { Template } from 'meteor/templating';
import { Reminders } from '../imports/api/reminders.js';

import './main.html';

Template.body.helpders({
  tasks() {
    return Reminders.find({});
  }
});