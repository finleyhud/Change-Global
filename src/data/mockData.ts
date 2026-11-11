import { MediaItem, InvestmentPillar } from '../types';

const baseUrl = import.meta.env.BASE_URL;

export const INVESTMENT_PILLARS: InvestmentPillar[] = [
  {
    id: 'early-stage',
    index: '01',
    title: 'Early-Stage Focus.',
    subtitle: 'Capitalizing on the advancement of emerging and frontier countries.',
    image: `${baseUrl}assets/changegi/pillar_1.png`
  },
  {
    id: 'strategic-positioning',
    index: '02',
    title: 'Strategic Positioning.',
    subtitle: 'Identifying strong ideas before they reach the mainstream.',
    image: `${baseUrl}assets/changegi/pillar_2.png`
  },
  {
    id: 'risk-mitigation',
    index: '03',
    title: 'Risk Mitigation.',
    subtitle: 'Diversified strategies designed to perform differently than the competition.',
    image: `${baseUrl}assets/changegi/pillar_3.png`
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'cnbc-china-outperformer',
    network: 'CNBC',
    title: 'China an outperformer despite reliance on Middle East oil',
    description:
      'Thea Jamison, Managing Director at CHANGE Global Investment, shares her preferred China stocks and sectors that have held up despite volatility from the Middle East conflict. She also remains bullish on other Asian emerging markets.',
    type: 'mp4',
    videoSrc:
      'https://pdl-iphone-cnbc-com.akamaized.net/7000406787/e3472d60-21a1-11f1-8c8e-83d434a5c9b7/1773711448-44620819544-hd_L.mp4',
    poster: `${baseUrl}assets/changegi/media_cnbc.png`,
    originalUrl:
      'https://www.cnbc.com/video/2026/03/17/china-outperforms-despite-reliance-on-mideast-oil-portfolio-manager.html'
  },
  {
    id: 'bloomberg-em-bull-cycle',
    network: 'Bloomberg Television',
    title: 'Emerging Markets Starting Bull Cycle: Jamison',
    description:
      'Thea Jamison, founder and managing director of CHANGE Global, says the firm believes emerging markets are still in the early stages of a cycle, citing improving fundamentals, signs of shifting capital flows, and compelling valuations.',
    type: 'youtube',
    // Exact December 19, 2025 Bloomberg "The Close" interview segment with Thea Jamison (10:51 to 16:54)
    videoSrc: 'https://www.youtube.com/embed/oVtv9AjNZt8?start=651&end=1014&autoplay=1&rel=0&modestbranding=1',
    poster: `${baseUrl}assets/changegi/media_bloomberg.png`,
    originalUrl:
      'https://www.bloomberg.com/news/videos/2025-12-19/emerging-markets-starting-bull-cycle-jamison-video'
  },
  {
    id: 'sohn-conference-ny-2026',
    network: 'Sohn Conference',
    title: 'Sohn Conference NY 2026 - Emerging Markets Reimagined',
    description:
      'At Sohn New York CHANGE Global’s Founder, Thea Jamison, made the case for emerging markets, thematic opportunities, and three stock picks. Watch the full pitch here:',
    type: 'youtube',
    videoSrc: 'https://www.youtube.com/embed/2mNefHtKnrw?autoplay=1&rel=0&modestbranding=1',
    poster: `${baseUrl}assets/changegi/media_sohn.jpg`,
    originalUrl: 'https://youtu.be/2mNefHtKnrw?si=s6I_N81-b-ovFf1h',
    hashtagLink: {
      text: '#SohnNewYork',
      url: 'https://youtu.be/2mNefHtKnrw?si=s6I_N81-b-ovFf1h'
    }
  }
];
