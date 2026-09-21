export type Patient = {
  id: string;
  hn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
};

export const patients: Patient[] = [
  { id: 'p-001', hn: '65000123', firstName: 'Somchai', lastName: 'Jaidee', dateOfBirth: '1988-04-12', gender: 'male' },
  { id: 'p-002', hn: '65000124', firstName: 'Somying', lastName: 'Sukjai', dateOfBirth: '1992-11-03', gender: 'female' },
  { id: 'p-003', hn: '65000125', firstName: 'Anan', lastName: 'Meechai', dateOfBirth: '1976-07-29', gender: 'male' },
];
