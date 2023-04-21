export interface Form {
  formName: string;
  referenceNo: string;
  created: Date;
  deadline: Date;
  modifiedBy: string;
  lastModificationDate: Date;
  status: 'Approved' | 'In Progress' | 'Created';
  requiredAction: string[];
}
