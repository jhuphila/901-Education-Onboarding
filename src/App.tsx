import { useState } from "react";
import TeamList from "./TeamList";
import { getTeamStatus } from "./getTeamStatus";
import type { Team } from "./types";

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

  const [teamStatusAttr, setTeamStatusAttr] = useState<string | null>(null);

  function dispatch(eventName: string, detail: any) {
    if (eventName === 'requestTeamStatus') {
        getTeamStatus(detail.teamId).then((result) => {
          setTeamStatusAttr(JSON.stringify(result));
        });
    }
  }

  // getTeamStatus("1").then((result) => {
  //   console.log("Team 1:", result);
  // });

  // getTeamStatus("999").then((result) => {
  //     console.log("Team 999:", result);
  // });



  return (
    <div>
      <h1>Teams</h1>
      <TeamList
          teams={teams}
          attributes={{ 'team-status': teamStatusAttr }}
          dispatch={dispatch}
      />

    </div>
  );
}

export default App;