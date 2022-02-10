import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TweetWrap = styled.div`
  border: 1px solid skyblue;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  max-width: 285px;
  font-family: Arial, Helvetica, sans-serif;
`;
const TinyText = styled.div`
  font-size: 0.7em;
  display: inline;
`;
const Author = styled.div`
  font-size: 1.2em;
  display: inline;
  font-weight: bold;
`;
const Time = styled.div`
  font-size: 0.8em;
  display: inline;
`;
const Text = styled.div`
  display: block;
`;
/**
 * Primary UI component for user interaction  
 */
export const Tweet = ({ date, author, text, ...props }) => {
  return (
    <TweetWrap>
      <TinyText>from</TinyText> <Author>{author}</Author><Time> {timeSince(date)} ago </Time>
      <div> &nbsp; </div>
      <Text>{text}</Text>
    </TweetWrap>
  );
};

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

Tweet.propTypes = {
  /**
   * What is the date?
   */
   date: PropTypes.instanceOf(Date),
  /**
   * Who is the author?
   */
   author: PropTypes.string,
  /**
   * What should the text be?
   */
   text: PropTypes.string,
};

Tweet.defaultProps = {
    date: new Date(Date.now() - (60000 * 5) ),
    author: 'King Arthur',
    text: 'lorum ipsom',
};
