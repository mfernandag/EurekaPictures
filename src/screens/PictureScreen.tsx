import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MainStackParams} from '../interfaces/MainStackParams';
import Share from 'react-native-share';
import ShareIcon from '../assets/ShareIcon';
import {DARK_PURPLE} from '../theme/MainTheme';

interface Props extends StackScreenProps<MainStackParams, 'PictureScreen'> {}

export const PictureScreen = ({route}: Props) => {
  const params = route.params;

  const shareImage = async () => {
    const shareOptions = {
      url: params.uri,
    };

    try {
      const shareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1, marginTop: 20}}>
      <View>
        <Image style={styles.imageContainer} source={{uri: params.uri}} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {params.city}, {params.province}
          </Text>
        </View>

        <View style={styles.shareContainer}>
          <TouchableOpacity onPress={shareImage} style={{flexDirection: 'row'}}>
            <Text style={{color: DARK_PURPLE}}>Share</Text>
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    color: DARK_PURPLE,
    fontWeight: '600',
    fontSize: 16,
  },
  shareContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
