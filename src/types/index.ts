export interface PricingInfo {
  setupFee?: string;
  monthlyRetainer?: string;
  perDeliverable?: string;
  note?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  pricing?: {
    type?: string;
    fee?: string;
    deliverables?: string;
    note?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  direction: 'vn-to-au' | 'au-to-vn';
  items: ServiceItem[];
  pricing?: PricingInfo;
}

export type Partner = {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
};
