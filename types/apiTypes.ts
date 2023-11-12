// types/apiTypes.ts

export interface Product {
  id: number;
  dbRole: string;
  name: string;
  sizeUnit: string;
  sizeValue: string;
  indentifier: string;
}

export interface Principal {
  id: number;
  role: string;
  name: string;
  crdsId: number;
  indentifier: number;
}

export interface ApiResponse {
  id: number;
  name: string;
  type: string;
  clientID: string;
  pipelineStage: null | string;
  estimatedClosedDate: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  products: Product[];
  principals: Principal[];
}
