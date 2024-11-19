// app/components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">YouTube Clone</div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="border rounded p-2 w-80"
          />
        </div>
      </nav>
    );
  }
  