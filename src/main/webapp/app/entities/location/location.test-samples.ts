import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 31982,
};

export const sampleWithPartialData: ILocation = {
  id: 24626,
  postalCode: 'really',
  city: "O'Connellborough",
  stateProvince: 'forenenst incidentally',
};

export const sampleWithFullData: ILocation = {
  id: 28607,
  streetAddress: 'ha fooey',
  postalCode: 'search huzzah tray',
  city: 'Fayetteville',
  stateProvince: 'provision qua dial',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
