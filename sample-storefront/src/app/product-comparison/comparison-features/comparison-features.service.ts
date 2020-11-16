import { Injectable } from '@angular/core';
import { Classification, Feature, Product } from '@spartacus/core';
import {
  ComparisonFeatureType,
  ProductComparisonCategory,
  ProductComparisonProperty,
} from './model';

/**
 * The comparison feature service builds a feature structure cross multiple
 * products. The features from the given products are combined into a single
 * set of features, which contains a value for each product.
 */
@Injectable({
  providedIn: 'root',
})
export class ComparisonFeaturesService {
  public hideEqual = true;

  build(products: Product[]): ProductComparisonCategory[] {
    const comparisonCategories = [];

    products.forEach((product: Product) => {
      product.classifications?.forEach((classification: Classification) =>
        classification.features.forEach((feature: Feature) => {
          // The backend allows to hide features from the comparison
          if (feature.comparable) {
            this.createFeatureValue(
              comparisonCategories,
              feature,
              classification,
              products,
              product.code
            );
          }
        })
      );
    });
    return comparisonCategories;
  }

  /**
   * Adds a value to the comparison property.
   *
   * There's also the notion of the values for the different products being
   * equal or not.
   */
  private createFeatureValue(
    comparisonCategories: ProductComparisonCategory[],
    feature: Feature,
    classification: Classification,
    products: Product[],
    productCode: string
  ): void {
    const category = this.createCategory(
      comparisonCategories,
      classification.name
    );
    const property = this.createProperty(category, feature.name);
    const value = this.resolveFeatureValue(feature);

    property.type = this.resolveFeatureType(value);

    property.values.set(productCode, value);
    // validate if there are any differences
    const values = new Set();
    property.values.forEach((key) => values.add(key));
    // indicates that we have multiple values
    property.isEqual =
      products.length > 1 && property.values.size > 1 && values.size === 1;
  }

  /**
   * Returns the comparison category for the given classification.
   *
   * If the comparison category doesn't exist yet, it will be created on the fly.
   */
  private createCategory(
    comparisonCategories: ProductComparisonCategory[],
    name: string
  ): ProductComparisonCategory {
    let cat = comparisonCategories.find((c) => c.name === name);
    if (!cat) {
      cat = { name, properties: [] };
      comparisonCategories.push(cat);
    }
    return cat;
  }

  /**
   * Returns the comparison property for the given comparison category and name.
   *
   * If the comparison property doesn't exist yet, it will be created on the fly.
   */
  private createProperty(
    category: ProductComparisonCategory,
    name: string
  ): ProductComparisonProperty {
    let property = category.properties.find((f) => f.name === name);
    if (!property) {
      property = {
        name,
        values: new Map(),
      };
      category.properties.push(property);
    }

    return property;
  }

  /**
   * Resolves the feature value in a single string value.
   *
   * Features can be multi-valued, either by a list of values or a range. We
   * keep it simple for now, and concatenate the values into a single string.
   */
  private resolveFeatureValue(feature: Feature): string {
    const separator = feature.range ? ' - ' : ', ';
    return feature.featureValues.map((value) => value.value).join(separator);
  }

  /**
   * Resolves the feature type.
   *
   * While the backend provides a feature type, it seems undefined (likely not
   * be requested in the field request param), which is why we do it pragmatic
   * for now.
   */
  private resolveFeatureType(value: string): ComparisonFeatureType {
    // very pragmatic way to resolve the type
    if (value === 'true' || value === 'false') {
      return ComparisonFeatureType.BOOL;
    }
    return ComparisonFeatureType.STRING;
  }
}
