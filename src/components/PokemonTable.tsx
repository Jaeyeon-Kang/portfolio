import React from "react";
import { Pokemon } from "../types/pokemon";

interface PokemonTableProps {
  pokemon: Pokemon[];
}

const PokemonTable: React.FC<PokemonTableProps> = ({ pokemon }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full text-center shadow-lg rounded-lg">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 px-4 py-2 w-1/12 text-sm">
              ID
            </th>
            <th className="border border-gray-300 px-4 py-2 w-2/12 text-sm">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-2 w-3/12 text-sm">
              Height
            </th>
            <th className="border border-gray-300 px-4 py-2 w-3/12 text-sm">
              Weight
            </th>
            <th className="border border-gray-300 px-4 py-2 w-3/12 text-sm">
              Base Experience
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((poke) => (
            <tr
              key={poke.id}
              className="hover:bg-gray-100 transition duration-200"
            >
              <td className="border border-gray-300 px-4 py-2">{poke.id}</td>
              <td className="border border-gray-300 px-4 py-2 capitalize">
                {poke.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {poke.height}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {poke.weight}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {poke.baseExperience}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;

