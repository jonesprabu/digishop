/* tslint:disable */

declare var Object: any;
export interface ProductInterface {
  "id"?: any;
  "name": string;
  "unit_price": number;
  "units_in_stock": number;
  "units_in_carts": number;
}

export class Product implements ProductInterface {
  "id": any;
  "name": string;
  "unit_price": number;
  "units_in_stock": number;
  "units_in_carts": number;
  constructor(data?: ProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Product for dynamic purposes.
  **/
  public static factory(data: ProductInterface): Product{
    return new Product(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Product',
      plural: 'products',
      path: 'products',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "unit_price": {
          name: 'unit_price',
          type: 'number',
          default: 0
        },
        "units_in_stock": {
          name: 'units_in_stock',
          type: 'number',
          default: 0
        },
        "units_in_carts": {
          name: 'units_in_carts',
          type: 'number',
          default: 0
        },
      },
      relations: {
      }
    }
  }
}
