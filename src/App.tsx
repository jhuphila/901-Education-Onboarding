import TeamCard from "./TeamCard";

function App() {
  const team = {
    id: "1",
    teamName: "Hack4Impact",
    school: "Drexel University",
  };

  return (
    <div>
      <h1>Teams</h1>
      <TeamCard team={team} />
    </div>
  );
}

export default App;