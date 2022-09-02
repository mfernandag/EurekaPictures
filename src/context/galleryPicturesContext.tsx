import React, {Dispatch, SetStateAction, useReducer} from 'react';

export interface GalleryItems {
  uri: string;
  city: string;
  province: string;
}

export type GalleryContextType = {
  items: GalleryItems[];
  fetchImages: any;
  saveImage: any;
};

export const GalleryPicturesContext =
  React.createContext<GalleryContextType | null>(null);
