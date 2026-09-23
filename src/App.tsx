import TeamList from "./TeamList";
import { getTeamStatus } from "./getTeamStatus";

function App() {
  const teams = [
    {
      id: "1",
      teamName: "Hack4Impact",
      school: "Drexel University",
    },
    {
      id: "2",
      teamName: "Filipino Intercultural Society of Drexel University",
      school: "Drexel University",
    },
    {
      id: "3",
      teamName: "Asian Student Association",
      school: "Drexel University",
    },
    {
      id: "4",
      teamName: "Women in Computing Society",
      school: "Drexel University",
    },
    {
      id: "5",
      teamName: "Society of Asian Scientists and Engineers",
      school: "Drexel University",
    },
  ];

  getTeamStatus("1").then((result) => {
    console.log("Team 1:", result);
  });

  getTeamStatus("999").then((result) => {
      console.log("Team 999:", result);
  });


  return (
    <div>
      <h1>Teams</h1>
      <TeamList teams={teams} />
    </div>
  );
}

export default App;