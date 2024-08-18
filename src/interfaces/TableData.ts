// interfaces/TableData.ts

export interface TableData {
  id: number;
  title: string;
  name: string;
  valorTotal: string;
  peopleNames: string[];
  date: string;
}

export interface TableProps {
  columns: string[];
  data: TableData[];
  sortDirection: string;
  sortColumn: string;
  onSort: (column: string) => void;
  loading: boolean;
}