import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 19713,
};

export const sampleWithPartialData: IJobHistory = {
  id: 25455,
};

export const sampleWithFullData: IJobHistory = {
  id: 19574,
  startDate: dayjs('2024-11-18T00:59'),
  endDate: dayjs('2024-11-18T12:39'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
