import "./globals.css";

export default function Home() {
  return (
    <div> 
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Tailwind CSS!
      </h1>
      <p className="text-lg text-gray-700">
        This page is styled with Tailwind CSS utility classes.
      </p>
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Click Me
      </button>
      </div>
  );
}
