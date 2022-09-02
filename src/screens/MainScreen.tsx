import React, {useContext} from 'react';
import {MainButton} from '../components/MainButton';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  GalleryContextType,
  GalleryPicturesContext,
} from '../context/galleryPicturesContext';
import {GalleryImage} from '../components/GalleryImage';
import {defaultStyles} from '../theme/MainTheme';
import NoItemsGalleryImage from '../assets/NoItemsGalleryImage';

export const MainScreen = ({navigation}: any) => {
  const {items} = useContext(GalleryPicturesContext) as GalleryContextType;

  const navigateToTakePicture = () => {
    navigation.navigate('StackTakePicture');
  };

  return (
    <ScrollView
      contentContainerStyle={[
        defaultStyles.mainContainer,
        {justifyContent: 'space-between'},
      ]}>
      <View style={styles.contentContainer}>
        {items.length === 0 && (
          <View style={{alignItems: 'center'}}>
            <NoItemsGalleryImage />
          </View>
        )}

        <View style={styles.galleryContainer}>
          {items.map((item: any) => {
            return (
              <GalleryImage
                image={item.uri}
                onPress={() =>
                  navigation.navigate('PictureScreen', {
                    uri: item.uri,
                    city: item.city,
                    province: item.province,
                  })
                }
              />
            );
          })}
        </View>

        {items.length === 0 && (
          <MainButton text="Take a picture" onPress={navigateToTakePicture} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  galleryContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
