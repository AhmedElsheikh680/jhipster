import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 24982,
  departmentName: 'monocle',
};

export const sampleWithPartialData: IDepartment = {
  id: 31987,
  departmentName: 'unimportant wherever',
};

export const sampleWithFullData: IDepartment = {
  id: 7662,
  departmentName: 'busily remorseful off',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'admired joy',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
