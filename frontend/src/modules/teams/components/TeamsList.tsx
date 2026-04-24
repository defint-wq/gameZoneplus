import React from "react";
import { useTeams } from "../hooks/useTeams";
import { Table } from "../../../../ui/components/table";

export const TeamsList: React.FC = () => {
  const { teams, loading } = useTeams();

  if (loading) {
    return <div className="p-4 text-center">Уншиж байна...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Багуудын жагсаалт</h2>

      <Table>
        <Table.Caption>Нийт бүртгэлтэй багуудын мэдээлэл</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Багийн нэр</Table.Head>
            <Table.Head>Бүс нутаг</Table.Head>
            <Table.Head>Ранк</Table.Head>
            <Table.Head>Хожлын хувь</Table.Head>
            <Table.Head>Гишүүд</Table.Head>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {teams.map((team) => (
            <Table.Row key={team.id}>
              <Table.Cell className="font-medium">
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
              </Table.Cell>
              <Table.Cell>{team.region}</Table.Cell>
              <Table.Cell>{team.rank}</Table.Cell>
              <Table.Cell>{team.winRate}%</Table.Cell>
              <Table.Cell>
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
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
