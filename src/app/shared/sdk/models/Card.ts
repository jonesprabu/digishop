/* tslint:disable */

declare var Object: any;
export interface CardInterface {
  "id"?: any;
  "type": string;
  "user_id"?: string;
}

export class Card implements CardInterface {
  "id": any;
  "type": string;
  "user_id": string;
  constructor(data?: CardInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Card`.
   */
  public static getModelName() {
    return "Card";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Card for dynamic purposes.
  **/
  public static factory(data: CardInterface): Card{
    return new Card(data);
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
      name: 'Card',
      plural: 'cards',
      path: 'cards',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "user_id": {
          name: 'user_id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
