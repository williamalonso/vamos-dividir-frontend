// interfaces/TableData.ts

export interface TableData {
  id: number;
  name: string;
  valorTotal: string;
  data: string;
}

export interface TableProps {
  columns: string[];
  data: TableData[];
  sortDirection: string;
  sortColumn: string;
  onSort: (column: string) => void;
  loading: boolean;
}