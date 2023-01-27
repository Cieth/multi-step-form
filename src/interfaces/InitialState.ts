export interface initialStateI {
  name: string;
  email: string;
  number: string;
  plan: string;
  yearly: boolean;
  addon: {};
  page: number;
  activePlan: number | null;
  activeAddons: Array<boolean>;
  totalPlan: number;
  totalAddon: number;
  finalBill: number;
}
