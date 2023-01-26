export interface initialStateI {
  name: string;
  email: string;
  number: string;
  plan: string;
  yearly: boolean;
  addon: {};
  page: number;
  activePlan: number | null;
  activeAddons: Array<number>;
  totalPlan: number;
  totalAddon: number;
  finalBill: number;
}
