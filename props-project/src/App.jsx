import Card from "./components/Card";
import jobs from "./Data/jobs";
function App() {
  return (
    <div className="parent">
      {jobs.map(function (job) {
        return (
          <div key={job.id}>
            <Card job={job} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
