/* tslint:disable */

declare var Object: any;
export interface OrderInterface {
  "id"?: any;
  "user_id": string;
  "card_id": string;
  "products"?: Array<any>;
  "status": string;
  "started_time": Date;
  "checkedout_time": Date;
}

export class Order implements OrderInterface {
  "id": any;
  "user_id": string;
  "card_id": string;
  "products": Array<any>;
  "status": string;
  "started_time": Date;
  "checkedout_time": Date;
  constructor(data?: OrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Order`.
   */
  public static getModelName() {
    return "Order";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Order for dynamic purposes.
  **/
  public static factory(data: OrderInterface): Order{
    return new Order(data);
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
      name: 'Order',
      plural: 'orders',
      path: 'orders',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "user_id": {
          name: 'user_id',
          type: 'string'
        },
        "card_id": {
          name: 'card_id',
          type: 'string'
        },
        "products": {
          name: 'products',
          type: 'Array&lt;any&gt;'
        },
        "status": {
          name: 'status',
          type: 'string',
          default: 'InProgress'
        },
        "started_time": {
          name: 'started_time',
          type: 'Date'
        },
        "checkedout_time": {
          name: 'checkedout_time',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
