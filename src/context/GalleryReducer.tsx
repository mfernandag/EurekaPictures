export function galleryReducer(gallery: any, action: any) {
  switch (action.type) {
    case 'ADD_IMAGE': {
      return [...gallery, action.payload];
    }

    default:
      return gallery;
  }
}
