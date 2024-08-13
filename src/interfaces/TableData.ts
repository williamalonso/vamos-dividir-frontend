// interfaces/TableData.ts

export interface TableData {
  name: string;
  valorTotal: string;
  data: string;
}

export interface TableProps {
  columns: string[];
  data: TableData[];
  sortDirection: string;
  sortColumn: string;
  onSort: any;
}