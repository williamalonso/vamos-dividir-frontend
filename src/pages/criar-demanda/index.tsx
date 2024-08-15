// pages/criar-demanda.tsx

import React from 'react';

const CriarDemanda: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Criar Nova Demanda</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Título da Demanda
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-[#24A78A] focus:border-[#24A78A] dark:bg-[#3c3c3c] dark:text-white"
            placeholder="Insira o título da demanda"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Descrição
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-[#24A78A] focus:border-[#24A78A] dark:bg-[#3c3c3c] dark:text-white"
            rows={4}
            placeholder="Descreva a demanda"
          />
        </div>
        <button
          type="submit"
          className="bg-[#24A78A] text-white px-4 py-2 rounded hover:bg-[#1E8A74]">
          Criar
        </button>
      </form>
    </div>
  );
};

export default CriarDemanda;
