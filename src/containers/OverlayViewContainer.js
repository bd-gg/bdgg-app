import React from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';

export default function OverlayViewContainer(props) {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.close}
      backdropTransitionOutTiming={0}
      {...props}
    >
      <SafeAreaView flex={1}>{props.children}</SafeAreaView>
    </Modal>
  );
}
