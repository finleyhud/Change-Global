export interface MediaItem {
  id: string;
  network: string;
  title: string;
  description: string;
  type: 'mp4' | 'youtube';
  videoSrc: string;
  poster: string;
  originalUrl: string;
  hashtagLink?: {
    text: string;
    url: string;
  };
}

export interface InvestmentPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  image: string;
}
