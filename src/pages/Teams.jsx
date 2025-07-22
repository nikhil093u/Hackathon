import React, { useState } from "react";

export default function Teams() {
  const [teams, setTeams] = useState([
    { id: 1, name: "Team Alpha", members: ["Alice", "Bob"] },
    { id: 2, name: "Team Beta", members: ["Charlie", "Dave"] },
  ]);

  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState("");

  const handleAddTeam = (e) => {
    e.preventDefault();

    if (!teamName.trim()) {
      alert("Team name is required");
      return;
    }

    const membersArray = members
      .split(",")
      .map((m) => m.trim())
      .filter(Boolean);

    const newTeam = {
      id: teams.length + 1,
      name: teamName.trim(),
      members: membersArray,
    };

    setTeams([...teams, newTeam]);
    setTeamName("");
    setMembers("");
  };

  return (
    <div className="min-h-full my-6 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 cursor-default">
        Teams
      </h2>

      <ul className="mb-8 space-y-4 ">
        {teams.map((team) => (
          <li
            key={team.id}
            className="p-4 border border-gray-200 rounded-md hover:shadow-lg transition cursor-pointer"
          >
            <strong className="text-lg text-indigo-600">{team.name}</strong>
            <p className="text-gray-700 mt-1">
              Members: {team.members.join(", ")}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800 cursor-default">
        Add a New Team
      </h3>
      <form onSubmit={handleAddTeam} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Team Name:
          </label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter team name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Members (comma separated):
          </label>
          <input
            type="text"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            placeholder="Alice, Bob, Charlie"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Team
        </button>
      </form>
    </div>
  );
}
