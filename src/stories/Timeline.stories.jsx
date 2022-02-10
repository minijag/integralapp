import React from 'react';

import { Timeline } from './Timeline';

export default {
  title: 'Example/Timeline',
  component: Timeline,
};

const Template = (args) => <Timeline {...args}/>;

export const NewPost = Template.bind({});

NewPost.args = {
  posts: [
    {author: 'Bob', date: new Date(Date.now() - (60000 * 5) ), text: 'Darn! We Lost'},
    {author: 'Bob', date: new Date(Date.now() - (60000 * 2) ), text: 'Good game though.'}
  ]
};