import React from "react";
import { useTeams } from "../hooks/useTeams";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../../../../ui/components/table";

export const TeamsList: React.FC = () => {
  const { teams, loading } = useTeams();

  if (loading) {
    return <div className="p-4 text-center">Уншиж байна...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Багуудын жагсаалт</h2>

      <Table>
        <TableCaption>Нийт бүртгэлтэй багуудын мэдээлэл</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Багийн нэр</TableHead>
            <TableHead>Бүс нутаг</TableHead>
            <TableHead>Ранк</TableHead>
            <TableHead>Хожлын хувь</TableHead>
            <TableHead>Гишүүд</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {team.logoUrl && (
                    <img
                      src={team.logoUrl}
                      alt={team.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  {team.name}
                </div>
              </TableCell>
              <TableCell>{team.region}</TableCell>
              <TableCell>{team.rank}</TableCell>
              <TableCell>{team.winRate}%</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {team.members.map((player) => (
                    <span
                      key={player.id}
                      className="px-2 py-1 bg-gray-100 text-xs rounded-md"
                      title={`${player.role} - Level ${player.level}`}
                    >
                      {player.nickname}
                    </span>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
