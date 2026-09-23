import type { Team } from "./types";
import { useState } from "react";
import TeamCard from "./TeamCard";


type TeamListProps = {
    teams: Team[];
};

export default function TeamList({ teams }: TeamListProps) {
    const [selectedTeamId, setSelectedTeamId] = useState(null);

    if (teams.length === 0) {
        return <p>No teams yet.</p>;
    }

    const selectedTeam = teams.find((team) => team.id === selectedTeamId);

    return (
        <div>
        {teams.map((team) => (
            <TeamCard
                key={team.id}
                team={team}
                onClick={()=> setSelectedTeamId(team.id)}
                selected={team.id===selectedTeamId}
                />
        ))}

        <p>
            Selected : {selectedTeam ? selectedTeam.teamName : "none"}
        </p>
        </div>
    );
}
