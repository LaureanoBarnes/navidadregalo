export interface Photo {
    src: string;
    caption: string;
  }
  
  export interface GiftBoxProps {
    isOpened: boolean;
    onOpen: () => void;
  }
  
  export interface ThemedGalleryProps {
    title: string;
    photos: Photo[];
  }