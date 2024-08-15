// pages/criar-demanda/index.tsx

import { createDemand } from '@/api/demandService';
import React, { useState } from 'react';

const CriarDemanda: React.FC = () => {

  const [title, setTitle] = useState('');
  const [participants, setParticipants] = useState<string[]>([""]);
  const [loading, setLoading] = useState(false);

  const handleAddParticipant = () => {
    setParticipants([...participants, ""]);
  };

  const handleRemoveParticipant = () => {
    if (participants.length > 1) {
      setParticipants(participants.slice(0, -1));
    }
  };

  const handleParticipantChange = (index: number, value: string) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createDemand({
        title,
        participants,
      });
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Failed to create demand. Please try again.', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Criar Grupo</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Título do Grupo
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-[#24A78A] focus:border-[#24A78A] dark:bg-[#3c3c3c] dark:text-white"
            placeholder="Ex: Bar com amigos"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Participantes
          </label>
          {participants.map((participant, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={participant}
                onChange={(e) => handleParticipantChange(index, e.target.value)}
                className="mt-1 block w-1/2 border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-[#24A78A] focus:border-[#24A78A] dark:bg-[#3c3c3c] dark:text-white"
                placeholder={`Participante ${index + 1}`}
              />
              {index === participants.length - 1 && (
                <>
                  <button
                    type="button"
                    onClick={handleAddParticipant}
                    className="bg-[#24A78A] text-white px-4 py-2 rounded hover:bg-[#1E8A74] ml-2"
                  >
                    Adicionar mais participantes
                  </button>
                  {participants.length > 1 && (
                    <button
                      type="button"
                      onClick={handleRemoveParticipant}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                    >
                      Remover participante
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        
        <button
          type="submit"
          className="bg-[#24A78A] text-white px-4 py-2 rounded hover:bg-[#1E8A74]"
        >
          { loading ? 'Criando...' : 'Criar Grupo' }
        </button>
      </form>
    </div>
  );
};

export default CriarDemanda;