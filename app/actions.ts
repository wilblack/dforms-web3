
export interface IFormAction {
  type: string;
  id: number;
  name?: string;
}

export function addForm(name: string, id: number): IFormAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function removeForm(id: number): IFormAction {
  return {
    type: 'REMOVE',
    id
  };
}

export function starForm(id: number): IFormAction {
  return {
    type: 'STAR',
    id
  };
}