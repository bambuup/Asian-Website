export interface Service {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export type Partner = {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
};
