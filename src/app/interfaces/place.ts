export interface Place {
  title: string;
  city?: string;
  country?: string;
  keywords?: string;
  selected?: boolean;
  timestamp?: number;
  coordinates?: {
    longtitude: number;
    latitude: number;
  };
  price?: number;
  photos?: string[];
}
