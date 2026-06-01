import { Photo, PhotosPage } from "@/types/photo";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const PAGE_SIZE = 20;

export async function fetchPhotos(page: number): Promise<PhotosPage> {
  const start = (page - 1) * PAGE_SIZE;
  const res = await fetch(
    `${BASE_URL}/photos?_start=${start}&_limit=${PAGE_SIZE}`
  );

  if (!res.ok) throw new Error("Failed to fetch photos");

  const photos: Photo[] = await res.json();

  // JSONPlaceholder has 5000 photos total
  const total = 5000;
  const fetched = start + photos.length;
  const nextPage = fetched < total && photos.length === PAGE_SIZE ? page + 1 : undefined;

  return { photos, nextPage, total };
}
