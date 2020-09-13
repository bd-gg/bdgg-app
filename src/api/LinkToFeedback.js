import { Linking } from 'react-native';

export default function LinkToFeedback() {
  Linking.openURL(
    'mailto:bdggsupport@gmail.com?subject=BDGG 피드백 보내기&body=피드백..'
  );
}
