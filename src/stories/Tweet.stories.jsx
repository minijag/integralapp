import React from 'react';

import { Tweet } from './Tweet';

export default {
  title: 'Example/Tweet',
  component: Tweet,
};

const Template = (args) => <Tweet {...args}/>;

export const NewPost = Template.bind({});

NewPost.args = {
  author: 'King Arthur',
  date: new Date(Date.now() - (60000 * 5) ),
  text: 'Hello world',
};