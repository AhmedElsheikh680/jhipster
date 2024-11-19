import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 16324,
};

export const sampleWithPartialData: ICountry = {
  id: 2337,
  countryName: 'animated steep save',
};

export const sampleWithFullData: ICountry = {
  id: 13517,
  countryName: 'plain that since',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
