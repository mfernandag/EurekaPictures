import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GREEN} from '../theme/MainTheme';

interface Props {
  text: string;
  onPress: () => void;
}

export const MainButton = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.uploadButton} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  uploadButton: {
    alignItems: 'center',
    backgroundColor: GREEN,
    padding: 10,
    marginTop: 20,
  },
});
