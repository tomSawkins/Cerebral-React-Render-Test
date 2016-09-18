import Model from 'cerebral-model-immutable'
import items from './items'
import {parse} from 'query-string'

var query = parse(window.location.search); 

export interface MyModel {
  items: any
  settings: any
};

const strongModel: MyModel = {
  items: items,
  settings: {
    listType: query.type ? query.type : "key",
    numberOfItems: query.num ? query.num : 2000
  }
};

const model = Model(strongModel);

export default model;
