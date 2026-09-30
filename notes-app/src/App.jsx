import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyNotes = [...notes];
    copyNotes.push({ title, details });
    setNotes(copyNotes);

    setDetails("");
    setTitle("");
  };

  const deleteNote = (idx) => {
    const copyNotes = [...notes];
    copyNotes.splice(idx, 1);
    setNotes(copyNotes);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-7 lg:w-1/2  items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        {/* first input box for notes title */}
        <input
          type="text"
          placeholder="Enter notes heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
        />

        {/* second textarea box for writing notes details */}
        <textarea
          placeholder="Note something down"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="px-5 py-2 w-full font-medium  h-20 border-2 rounded outline-none"
        />
        <button className="w-full bg-white active:scale-95 font-medium text-black rounded px-5 py-2">
          Add Note
        </button>
      </form>
      <div className="p-10 lg:w-1/2 lg:border-l">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap justify-start items-start gap-5 h-[90%] mt-5 overflow-auto">
          {notes.map(function (note, idx) {
            return (
              <div
                key={idx}
                className="w-40 h-52 flex flex-col justify-between items-start text-black rounded-2xl bg-cover pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h2 className="font-bold text-lg leading-tight">
                    {note.title}
                  </h2>
                  <p className="leading-tight mt-2 text-sm font-medium text-gray-700">
                    {note.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="rounded text-white font-bold w-full text-xs py-1 bg-red-500 cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
