// app/page.tsx

import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import VideoGrid from './components/videogrid';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Navbar />
        <VideoGrid />
      </main>
    </div>
  );
}