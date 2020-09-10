import React from 'react';
import MatchContainer from '../containers/MatchContainer';

export default function MatchListEntry(props) {
  const index = props.index;
  const item = props.item;

  let __onPressed = () => {
    alert('onPress not implemented.');
  };
  let __onLongPressed = () => {
    props.onLongPress(index);
  };

  return <MatchContainer item={item} index={index}></MatchContainer>;
}
