import React from 'react';
import { Form } from '../../types/types';

interface FormDetailsProps {
  form: Form;
  onBack: () => void;
}

const FormDetails: React.FC<FormDetailsProps> = ({ form, onBack }) => {
  return (
    <div>
      <h2>Form Details</h2>
      <p>
        <strong>Form Name:</strong> {form.formName}
      </p>
      <button onClick={onBack}>Go Back</button>
    </div>
  );
};

export default FormDetails;
