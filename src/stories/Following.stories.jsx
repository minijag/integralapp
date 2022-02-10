import React from 'react';

import { Timeline } from './Timeline';

export default {
  title: 'Example/Following',
  component: Timeline,
};

const Template = (args) => <Timeline {...args}/>;

export const NewPost = Template.bind({});

NewPost.args = {
  posts: [
    {author: 'Bob', date: new Date(Date.now() - (60000 * 2) ), text: 'Darn! We Lost'},
    {author: 'Bob', date: new Date(Date.now() - (60000 * 1) ), text: 'Good game though.'},
    {author: 'Alice', date: new Date(Date.now() - (60000 * 5) ), text: 'I love the weather today.'},
    {author: 'Charlie', date: new Date(Date.now() - (15000 ) ), text: 'Im in New York today!  Anyone wnats to have a coffee?.'}
  ]
};