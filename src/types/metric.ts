export interface Metric {
  title: string;
  value: number;
  description?: string;
  change: number;
  icon: React.ReactNode | string;
  positive: boolean;
}
