import React, {useContext, useEffect, useState} from 'react';
import {Image, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import {launchCamera} from 'react-native-image-picker';
import {ScrollView} from 'react-native';
import {
  GalleryContextType,
  GalleryPicturesContext,
} from '../context/galleryPicturesContext';
import {MainButton} from '../components/MainButton';
import {defaultStyles, DARK_PURPLE} from '../theme/MainTheme';
import NewPictureImage from '../assets/NewPictureImage';
import SuccessImage from '../assets/SuccessImage';

export const TakePictureScreen = ({navigation}: any) => {
  const [image, setImage] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const {saveImage} = useContext(GalleryPicturesContext) as GalleryContextType;

  const getLocations = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        fetch(
          'https://maps.googleapis.com/maps/api/geocode/json?address=' +
            location.latitude +
            ',' +
            location.longitude +
            '&key=' +
            'AIzaSyAwEj8YJigRV2mUFNNH067Ut9wHc57rBuI',
        )
          .then(response => response.json())
          .then(responseJson => {
            setCity(responseJson.results[0].address_components[2].long_name);
            setProvince(
              responseJson.results[0].address_components[4].long_name,
            );
          });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  const takePicture = async () => {
    const options = {
      title: 'Take a picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true,
      mediaType: '',
    };

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');

        launchCamera(options, response => {
          if (response.errorCode) {
            console.error(response.errorMessage);
          } else {
            const uri = response.assets[0]?.uri;
            setImage(uri!);
            getLocations();
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const upload = () => {
    saveImage({uri: image, city: city, province: province});

    setUploadSuccess(true);
    setImage('');
    setCity('');
    setProvince('');
  };

  const navigateToMain = () => {
    navigation.navigate('StackMain');
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setUploadSuccess(false);
    });
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={[
        defaultStyles.mainContainer,
        {justifyContent: 'space-between'},
      ]}>
      <View style={styles.contentContainer}>
        {uploadSuccess ||
          (!image && (
            <View style={{alignItems: 'center'}}>
              <NewPictureImage />
            </View>
          ))}

        {uploadSuccess && (
          <View style={{alignItems: 'center'}}>
            <SuccessImage />
          </View>
        )}

        <View>
          {image && (
            <>
              <Image style={styles.imageContainer} source={{uri: image}} />
            </>
          )}
        </View>

        <View>
          {image && <MainButton onPress={upload} text="Upload to Gallery" />}
          {uploadSuccess && (
            <>
              <Text style={styles.titleText}>Success!</Text>
              <MainButton text="Go to Gallery" onPress={navigateToMain} />
            </>
          )}
          <MainButton text="Take a picture" onPress={takePicture} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
  },
  locationText: {
    margin: 15,
    color: DARK_PURPLE,
    alignSelf: 'center',
    fontWeight: '400',
  },
  titleText: {
    color: DARK_PURPLE,
    fontWeight: '600',
    fontSize: 18,
    alignSelf: 'center',
  },
});
