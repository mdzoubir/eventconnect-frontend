// src/components/contact/FormField.tsx
import React from 'react';
import { FormFieldProps } from '../../types/contact.types';

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  id, 
  type, 
  register,
  error,
  placeholder
}) => (
  <div className="form-group" style={{ marginBottom: "5px" }}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder || `Your ${label}`}
      {...register}
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default FormField;