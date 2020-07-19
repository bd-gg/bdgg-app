import React from 'react';
import Modal from 'react-native-modal';

export default function OverlayViewContainer(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.close}
      backdropTransitionOutTiming={0}
      {...props}>
      {props.children}
    </Modal >);
}
