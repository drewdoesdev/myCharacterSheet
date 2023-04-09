import { StyleSheet } from 'react-native';

export const combineStyles = (...styles) => {
  return StyleSheet.flatten(styles);
}