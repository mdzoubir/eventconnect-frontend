// src/types/contact.types.ts

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

export interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  register: any;
  error?: string;
  placeholder?: string;
}