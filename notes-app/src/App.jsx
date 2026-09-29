const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
  };
  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 lg:w-1/2  items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter notes heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
        />
        <textarea
          placeholder="Note something down"
          className="px-5 py-2 w-full font-medium  h-20 border-2 rounded outline-none"
        />
        <button className="w-full bg-white font-medium text-black rounded px-5 py-2">
          Add Note
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 h-full mt-5 overflow-auto">
          <div className="w-40 h-52 bg-white rounded-2xl"></div>
          <div className="w-40 h-52 bg-white rounded-2xl"></div>
          <div className="w-40 h-52 bg-white rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
