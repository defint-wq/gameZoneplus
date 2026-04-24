import { useState, useEffect } from "react";
import { type ITeam, Team } from "../../types/teams";

export const useTeams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const rawData: ITeam[] = [
        {
          id: 1,
          name: "The Avengers Esports",
          winRate: 75.5,
          rank: "Challenger",
          region: "Mongolia",
          logoUrl: "https://example.com/logo1.png",
          members: [
            { id: 101, nickname: "Slayer", role: "Carry", level: 55 },
            { id: 102, nickname: "Ace", role: "Mid", level: 54 },
            { id: 103, nickname: "Titan", role: "Tank", level: 53 },
          ],
        },
        {
          id: 2,
          name: "Global Elites",
          winRate: 68.2,
          rank: "Grandmaster",
          region: "SEA",
          logoUrl: "https://example.com/logo2.png",
          members: [
            { id: 201, nickname: "Swift", role: "Support", level: 50 },
            { id: 202, nickname: "Hunter", role: "Jungler", level: 51 },
          ],
        },
      ];

      setTeams(rawData.map((item) => new Team(item)));
      setLoading(false);
    };

    fetchData();
  }, []);

  return { teams, loading };
};
