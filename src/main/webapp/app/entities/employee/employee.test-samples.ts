import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 17392,
};

export const sampleWithPartialData: IEmployee = {
  id: 13534,
  firstName: 'Marina',
  email: 'Cruz.Romaguera29@hotmail.com',
  phoneNumber: 'shovel aha',
  hireDate: dayjs('2024-11-17T21:11'),
  salary: 11346,
};

export const sampleWithFullData: IEmployee = {
  id: 9058,
  firstName: 'Brycen',
  lastName: 'Hoppe',
  email: 'Abel.Price@gmail.com',
  phoneNumber: 'forgather blaring thread',
  hireDate: dayjs('2024-11-18T05:40'),
  salary: 18400,
  commissionPct: 26048,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
