"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Image from "next/image";

type Video = {
  title: string;
  description: string;
  thumbnail: string;
};

export default function Create() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [videos, setVideos] = useState<Video[]>([]); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !thumbnail) {
      alert("Please fill in all fields and upload a thumbnail!");
      return;
    }

    // Add the new video to the list
    const newVideo: Video = {
      title,
      description,
      thumbnail: URL.createObjectURL(thumbnail),
    };

    setVideos((prevVideos) => [...prevVideos, newVideo]);

    // Clear form
    setTitle("");
    setDescription("");
    setThumbnail(null);
    (document.getElementById("thumbnail-input") as HTMLInputElement).value = "";
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <Navbar />
        <h1 className="text-2xl font-bold mb-6">Create Content</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Enter video title"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Enter video description"
              rows={4}
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Thumbnail</label>
            <input
              type="file"
              id="thumbnail-input"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            Add Video
          </button>
        </form>

        {/* Preview Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Preview Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-sm">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={320} 
                  height={180}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="font-bold text-lg">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
