export type AboutSectionProps = {
  reverse?: boolean;
  image: string;
};

export interface BannerProps {
  imageSrc: string;
  text: string;
}
export interface WineProps {
  id: string;
  name: string;
  color: string;
  image: string;
  description?: string;
  addCardToShop: () => void;
}
export interface ImageProps {
  id: number;
  image: string;
}

export interface GalleryListingProps {
  endpoint: string;
  title: string;
}

export interface RoomDetailProps {
  id: string;
  name: string;
  mainImage: string;
  description?: string;
  location?: string;
  price?: number;
  images?: [];
}

export interface WineDetailProps {
  id?: string,
  image: string;
  name: string;
  description: string;
  color: string;
 
  vintage: number;
  alchocol: number;
  price: number;
}
export interface ComfortZoneProps {
  comfort: string;
  desc: string;
}

export interface WineDescriptionProps {
  desc: string;
  result: string | number;
}

export interface FilterButtonProps {
  label: string;
  filterType: string;
  onClick: (filter: string) => void;
}

export interface ImageModalProps {
  image: string;
  onClose: () => void;
}



export interface CartItem extends WineDetailProps {
  quantity?: number;
   liter?: string;
}