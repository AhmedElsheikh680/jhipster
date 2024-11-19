import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 5876,
};

export const sampleWithPartialData: IJob = {
  id: 31558,
  jobTitle: 'Dynamic Security Director',
  maxSalary: 29226,
};

export const sampleWithFullData: IJob = {
  id: 28477,
  jobTitle: 'Customer Identity Planner',
  minSalary: 6234,
  maxSalary: 22539,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
