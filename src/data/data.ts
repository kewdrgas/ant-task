import { Form } from '../types/types';

export const formsData: Form[] = [
  {
    formName: 'Form 1',
    referenceNo: 'REF0001',
    created: new Date('2023-04-10T10:20:30Z'),
    deadline: new Date('2023-04-25T10:20:30Z'),
    modifiedBy: 'User A',
    lastModificationDate: new Date('2023-04-11T10:20:30Z'),
    status: 'Approved',
    requiredAction: ['Quality', 'Operator'],
  },
  {
    formName: 'Form 2',
    referenceNo: 'REF0002',
    created: new Date('2023-04-10T10:20:30Z'),
    deadline: new Date('2023-04-25T10:20:30Z'),
    modifiedBy: 'User A',
    lastModificationDate: new Date('2023-04-11T10:20:30Z'),
    status: 'Created',
    requiredAction: ['Quality', 'Operator', 'Action 3'],
  },
  {
    formName: 'Form 3',
    referenceNo: 'REF0003',
    created: new Date('2023-04-10T10:20:30Z'),
    deadline: new Date('2023-04-25T10:20:30Z'),
    modifiedBy: 'User A',
    lastModificationDate: new Date('2023-04-11T10:20:30Z'),
    status: 'In Progress',
    requiredAction: ['Quality', 'Operator'],
  },
  {
    formName: 'Form 4',
    referenceNo: 'REF0004',
    created: new Date('2023-04-10T10:20:30Z'),
    deadline: new Date('2023-04-25T10:20:30Z'),
    modifiedBy: 'User A',
    lastModificationDate: new Date('2023-04-11T10:20:30Z'),
    status: 'In Progress',
    requiredAction: ['Quality'],
  },
  {
    formName: 'Form 5',
    referenceNo: 'REF0005',
    created: new Date('2023-04-10T10:20:30Z'),
    deadline: new Date('2023-04-25T10:20:30Z'),
    modifiedBy: 'User A',
    lastModificationDate: new Date('2023-04-11T10:20:30Z'),
    status: 'Approved',
    requiredAction: ['Operator'],
  },
];
