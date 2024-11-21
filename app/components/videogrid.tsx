// app/components/VideoGrid.tsx
import VideoCard from './videocard';

const mockVideos = [
  {
    title: 'Daily vlog|Work Day',
    channel: 'lisawisa',
    views: 5000,
    thumbnail: '/images/dailyvlog.png',
  },
  {
    title: 'How I earn $3000 monthly',
    channel: 'KaitlynLu',
    views: 4000,
    thumbnail: '/images/income.png',
  },
  {
    title: 'Easy Organic Recipes',
    channel: 'FoodHub',
    views: 1000,
    thumbnail: '/images/food.png',
  },
  {
    title: 'Episode 38|Q/A withDaniel Gall',
    channel: 'AJ3',
    views: 5000,
    thumbnail: '/images/podcast.png',
  },
  {
    title: 'Daily in my life | Picnic and Shopping',
    channel: 'LindseyVlogs',
    views: 5000,
    thumbnail: '/images/dailyvlogbeige.png',
  },
  {
    title: 'Soft Playlist ',
    channel: '99music',
    views: 5000,
    thumbnail: '/images/playlist.png',
  },
  {
    title: 'Books to improve your Mindset',
    channel: 'lisawisa',
    views: 4000,
    thumbnail: '/images/book.png',
  },
  {
    title: 'Travel Guide Manali',
    channel: 'Roundtheworld',
    views: 10000,
    thumbnail: '/images/travel.png',
  },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mockVideos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}
