// app/components/Sidebar.tsx
export default function Sidebar() {
    return (
      <aside className="w-64 h-screen bg-gray-100 p-5">
        <ul>
          <li className="mb-4">Home</li>
          <li className="mb-4">Trending</li>
          <li className="mb-4">Subscriptions</li>
          <li className="mb-4">Library</li>
          <li className="mb-4">History</li>
        </ul>
      </aside>
    );
  }
  