const DatalistComponent = () => {
  return(
    <div className="container flex flex-col shadow-lg shadow-black-500/50 p-8 bg-white dark:bg-[#3c3c3c]">
      <div className="flex justify-between cursor-pointer mb-2">
        <span>Festa aniversário Emanuelle</span>
        <span className="text-right">R$200,00</span>
      </div>
      <div className="flex justify-between cursor-pointer">
        <span>Jantar com amigos Raissa</span>
        <span className="text-right">R$75,60</span>
      </div>
    </div>
  );
}

export default DatalistComponent;