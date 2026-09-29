const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex justify-between items-start p-10">
        <div className="flex flex-col items-start gap-4 w-1/2">
          <input 
            type="text"
            placeholder="Enter notes heading"
            className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          />
          <textarea 
            placeholder="Note something down"
            className="px-5 py-2 w-full font-medium  h-20 border-2 rounded outline-none"
          />
          <button className="w-full bg-white font-medium text-black rounded px-5 py-2">Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default App