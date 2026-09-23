import { useState } from "react";
import type { Team } from "./types";
import TeamCard from "./TeamCard";

type TeamListProps = {
    teams: Team[];
    attributes: Record<string, string | null>;
    dispatch: (eventName: string, detail?: unknown) => void;
};

export default function TeamList({
    teams,
    attributes,
    dispatch,
}: TeamListProps) {
    const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

    if (teams.length === 0) {
        return <p>No teams yet.</p>;
    }

    const selectedTeam = teams.find(
        (team) => team.id === selectedTeamId
    );

    const teamStatusAttr = attributes["team-status"];

    let teamStatus: {
        id: string;
        teamName: string;
        approved: boolean;
    } | null = null;

    if (teamStatusAttr !== null) {
        teamStatus = JSON.parse(teamStatusAttr);
    }

    return (
        <div>
            {teams.map((team) => (
                <TeamCard
                    key={team.id}
                    team={team}
                    onClick={() => {
                        setSelectedTeamId(team.id);
                        dispatch("requestTeamStatus", {
                            teamId: team.id,
                        });
                    }}
                    selected={team.id === selectedTeamId}
                />
            ))}

            <p>
                Selected: {selectedTeam ? selectedTeam.teamName : "none"}
            </p>

            {selectedTeam && teamStatusAttr === null && (
                <p>Loading...</p>
            )}

            {selectedTeam && teamStatus && (
                <p>
                    {teamStatus.approved
                        ? "Approved."
                        : "Pending Approval."}
                </p>
            )}
        </div>
    );
}