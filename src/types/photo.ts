export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotosPage {
  photos: Photo[];
  nextPage: number | undefined;
  total: number;
}
