// types/blog.ts
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

export interface Category {
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  id: number;
  title: string;
  description: string | null;
  mediaId: number | null;
  media: Media | null;
  sort: number;
}

export interface Avatar {
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

export interface Owner {
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
  id: number;
  email: string;
  name: string;
  avatarId: number;
  permissionId: number;
  role: number;
  totalAmount: number;
  firstSurvey: boolean;
  verifiedEmail: boolean;
  avatar: Avatar;
  status: number;
}

export interface Blog {
  createdAt: string;
  deleted: boolean;
  id: number;
  title: string;
  slug: string;
  description: string;
  media: Media;
  categoryId: number;
  ownerId: number;
  category: Category;
  owner: Owner;
}

export interface BlogDetails {
  createdAt: string;
  deleted: boolean;
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  media: Media;
  categoryId: number;
  ownerId: number;
  category: Category;
  owner: Owner;
}

// response type
export interface BlogResponse {
  data: {
    blogs: Blog[];
    suitable: Blog[];
    newest: Blog[];
    popular: Blog[];
  };
}

export interface BlogDetailsResponse {
  data: BlogDetails;
}
