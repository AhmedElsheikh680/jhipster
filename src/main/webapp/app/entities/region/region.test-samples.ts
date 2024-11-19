import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 25790,
};

export const sampleWithPartialData: IRegion = {
  id: 32531,
  regionName: 'hmph',
};

export const sampleWithFullData: IRegion = {
  id: 7074,
  regionName: 'unlawful times',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
