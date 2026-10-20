import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=8`,
        );
        setUserData(response.data);
      } catch {
        setError("Could not load images. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page]);

  return (
    <main
      className={`flex min-h-screen flex-col transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="py-5 text-center text-5xl font-bold">Gallery</h1>

      <div className="mb-4 flex justify-center">
        <button
          type="button"
          onClick={() => setIsDark((current) => !current)}
          aria-pressed={isDark}
          className="rounded bg-purple-600 px-5 py-2 font-bold text-white cursor-pointer"
        >
          {isDark ? "Switch to light mode" : "Switch to dark mode"}
        </button>
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 content-start grid-cols-1 gap-6 px-4 pb-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <div className="col-span-full flex min-h-[50vh] items-center justify-center">
            <p className="py-10 text-5xl">Loading...</p>
          </div>
        ) : error ? (
          <p className="col-span-full text-center">{error}</p>
        ) : userData.length === 0 ? (
          <p className="col-span-full text-center">No users available.</p>
        ) : (
          userData.map((user) => (
            <div
              key={user.id}
              className={`overflow-hidden rounded-2xl shadow ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <Card user={user} />
            </div>
          ))
        )}
      </div>
      <div className="mt-auto flex justify-center gap-3 pb-8">
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white"
        >
          Prev
        </button>
        <p className="flex items-center font-bold">Page {page}</p>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="rounded-lg bg-purple-600 px-4 py-2 text-white"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default App;
