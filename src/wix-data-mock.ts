// src/wix-data-mock.ts
type TeamRow = { _id: string; teamName: string; school: string; approved: boolean };

const mockTeams: Record<string, TeamRow> = {
  '1': { _id: '1', teamName: 'Hack4Impact', school: 'Drexel University', approved: true },
  '2': { _id: '2', teamName: 'Filipino Intercultural Society of Drexel University', school: 'Drexel University', approved: false },
  '3': { _id: '3', teamName: 'Asian Student Association', school: 'Drexel University', approved: true },
  '4': { _id: '4', teamName: 'Women in Computing Society', school: 'Drexel University', approved: false },
  '5': { _id: '5', teamName: 'Society of Asian Scientists and Engineers', school: 'Drexel University', approved: true },
};

async function get(
  collectionId: string,
  itemId: string
): Promise<TeamRow | null> {
  const team = mockTeams[itemId];
  if (team) {
    return team;
  }
  return null;
}

export default {
  get,
};

