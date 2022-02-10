import React from 'react';
import PropTypes from 'prop-types';
import { Tweet } from './Tweet';

/**
 * Primary UI component for user interaction  
 */
 export const Timeline = ({ posts, ...props }) => {
  var asdf = posts.slice().sort( (a,b) => b.date - a.date)
  return (
    <div>
      {asdf.map((post) => 
        <Tweet key={post.text} date={post.date} author={post.author} text={post.text} />
      )}
    </div>    
  );
};



Timeline.defaultProps = {
  posts: [
    {author: 'Bob', date: new Date(Date.now() - (60000 * 5) ), text: 'Darn! We Lost'},
    {author: 'Bob', date: new Date(Date.now() - (60000 * 2) ), text: 'Good game though.'}
  ]
};