
export interface IFormAction {
  type: string;
  id: number;
  name?: string;
  description?: string;
}

export function addForm(name: string, id: number, description: string): IFormAction {
  return {
    type: 'ADD',
    id,
    name,
    description
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