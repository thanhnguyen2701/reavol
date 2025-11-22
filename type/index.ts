// types/index.ts

export interface Media {
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  id: number;
  originUrl: string;
  thumbUrl: string;
  type: number;
  width: number | null;
  height: number | null;
  duration: number | null;
  size: number | null;
  originName: string | null;
}

export interface BookItem {
  deleted: boolean;
  id: number;
  title: string;
  subTitle: string;
  author: string;
  bgColor: string;
  slug: string;
  thumbUrl: string;
  type: number;
  price: number;
  hot: boolean;
  totalWords: number;
  sort: number;
  media: Media;
  viewCount: number;
  bought: boolean;
  rating: number;
  totalChapter: number;
  favorite: boolean;
  public: boolean;
}

export interface Selection {
  createdAt: string | null;
  updatedAt: string | null;
  deleted: boolean;
  id: number;
  imageId: number | null;
  status: string | null;
  image: Media;
  name: string;
  description: string;
  numArticle: number;
}

/* -----------------------------
   Item Types
------------------------------ */

// type 0
export interface FreeBookItem {
  type: 0;
  freeBook: BookItem;
}

// type 1
export interface FreeListItemType {
  type: 1;
  freeList: BookItem[];
}

// type 21
export interface ImageItem {
  type: 21;
  image: Media;
}

// type 3
export interface ForYouItemType {
  type: 3;
  forYou: BookItem[];
}

// type 19
export interface TitleImageItem {
  type: 19;
  titleImage: {
    title: string;
    image: Media;
  };
}

// type 4
export interface SelectionsItem {
  type: 4;
  selections: Selection[];
}

// type 5
export interface TrendingItem {
  type: 5;
  trending: BookItem[];
}

// type 10
export interface TopWritersItem {
  type: 10;
  topWriters: {
    image: Media;
  };
}

// type 7
export interface NewestItem {
  type: 7;
  newest: BookItem[];
}

export type DataItem =
  | FreeBookItem
  | FreeListItemType
  | ImageItem
  | ForYouItemType
  | TitleImageItem
  | SelectionsItem
  | TrendingItem
  | TopWritersItem
  | NewestItem;

export interface ApiResponse {
  data: DataItem[];
  message: string;
}
