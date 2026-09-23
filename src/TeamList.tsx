import type { Team } from "./types";
import TeamCard from "./TeamCard";

type TeamListProps = {
    teams: Team[];
};

export default function TeamList({ teams }: TeamListProps) {
    if (teams.length === 0) {
        return <p>No teams yet.</p>;
    }
    return (
        <div>
        {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
        ))}
        </div>
    );
}
