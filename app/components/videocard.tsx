import Image from "next/image";

// app/components/VideoCard.tsx

type VideoCardProps = {
    title: string;
    channel: string;
    views: number;
    thumbnail: string;
  };
  
  export default function VideoCard({
    title,
    channel,
    views,
    thumbnail,
  }: VideoCardProps) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={225}
          className="w-full"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{channel}</p>
          <p className="text-sm text-gray-500">{views} views</p>
        </div>
      </div>
    );
  }
  