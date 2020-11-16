import { Product } from '@spartacus/core';

export interface ProductComparisonCategory {
  name?: string;
  properties?: ProductComparisonProperty[];
}

export interface ProductComparisonProperty {
  name?: string;
  values?: Map<string, string>;
  isEqual?: boolean;
  type?: ComparisonFeatureType;
}

export interface ProductComparisonDetails {
  products?: Product[];
  comparisonCategories?: ProductComparisonCategory[];
}

export enum ComparisonFeatureType {
  BOOL,
  STRING,
}
