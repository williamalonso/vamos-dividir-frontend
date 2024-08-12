export interface Data {
  id: number;
  quantity: number;
  createdDate: string;
  total: string;
  name: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export function createData(
  id: number,
  name: string,
  quantity: number,
  total: string,
  createdDate: string,
): Data {
  return { id, name, quantity, total, createdDate };
}
