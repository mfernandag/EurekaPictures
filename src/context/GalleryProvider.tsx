import React, {useReducer} from 'react';
import {GalleryPicturesContext} from './galleryPicturesContext';
import {galleryReducer} from './GalleryReducer';

type Props = {children?: React.ReactNode};

export const initialGallery = [];

export interface GalleryItem {
  uri: string;
  city: string;
  province: string;
}

export function GalleryPicturesProvider({children}: Props) {
  const [gallery, dispatch] = useReducer(galleryReducer, initialGallery);

  function fetchImages(items: GalleryItem[]) {
    dispatch({
      type: 'GET_IMAGES',
      payload: items,
    });
  }

  function saveImage(item: GalleryItem) {
    dispatch({
      type: 'ADD_IMAGE',
      payload: item,
    });
  }

  return (
    <GalleryPicturesContext.Provider
      value={{items: gallery, fetchImages, saveImage}}>
      {children}
    </GalleryPicturesContext.Provider>
  );
}
