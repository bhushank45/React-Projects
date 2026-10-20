import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "http://picsum.photos/v2/list?page=2&limit=30",
    );
    const data = response.data;
    setUserData(data);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">Gallary</h1>
      <div className="flex justify-center my-5">
        <button
          onClick={getData}
          className="bg-purple-600 text-white font-bold px-5 py-2 rounded "
        >
          Get Data
        </button>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {userData.length === 0
          ? <p className="col-span-full text-center">No User Available...</p>
          : userData.map((elem) => (
              <div key={elem.id} className="overflow-hidden rounded-2xl bg-white shadow">
                <img src={elem.download_url} alt={elem.author} className="h-64 w-full object-cover"/>
                <p className="p-3 text-lg"><span className="font-bold">Author: </span><span className="italic">{elem.author}</span></p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default App;
