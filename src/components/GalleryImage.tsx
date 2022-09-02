import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  image: string;
  onPress: () => void;
}

export const GalleryImage = ({image, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.imageContainer} source={{uri: image}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
});
