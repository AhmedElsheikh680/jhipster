import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 20904,
};

export const sampleWithPartialData: ITask = {
  id: 6983,
};

export const sampleWithFullData: ITask = {
  id: 5411,
  title: 'oof',
  description: 'finally all',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
