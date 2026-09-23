import type { Team } from "./types";

type TeamCardProps = {
  team: Team;
  onClick: () => void;
  selected: boolean;
};

function TeamCard({ team, onClick, selected }: TeamCardProps) {
  return (
    <div
        onClick={onClick}
        style={{
            border: selected ? "3px solid blue" : "1px solid gray",
            padding: "10px",
            margin: "10px 0",
            cursor: "pointer",
        }}
    >
        <h2>{team.teamName}</h2>
        <p>{team.school}</p>
    </div>
  );
}

export default TeamCard;