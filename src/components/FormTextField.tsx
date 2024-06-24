import React from 'react';

export type FormTextFieldType = "date" | "doc" | "phone" | "text";

interface FormTextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: FormTextFieldType;
  disabled?: boolean;
}

const formatValue = (type: FormTextFieldType, value: string): string => {
  switch (type) {
    case 'doc':
      // Implementar formatação para CPF, por exemplo: 000.000.000-00
      return value.replace(/\D/g, '') // Remove tudo o que não é dígito
                  .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o terceiro dígito
                  .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os seis dígitos
                  .replace(/(\d{3})(\d)/, '$1-$2') // Coloca hífen após os nove dígitos
                  .replace(/(-\d{2})\d+?$/, '$1'); // Permite apenas 11 dígitos
    case 'phone':
      // Implementar formatação para telefone, por exemplo: (00) 00000-0000
      return value.replace(/\D/g, '')
                  .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
                  .replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após os cinco dígitos
    default:
      return value; // Não altera o valor para os outros tipos
  }
};

const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  value,
  onChange,
  type,
  disabled = false
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = type === 'doc' || type === 'phone' ? formatValue(type, e.target.value) : e.target.value;
    onChange({...e, target: {...e.target, value: formattedValue}});
  };

  return (
    <label className={`form-control w-full max-h-20 ${disabled ? 'opacity-50' : ''}`}>
      <div className="label">
        <span className="label-text font-semibold text-md">{label}</span>
      </div>
      <input
        type={type === 'text' || type === 'doc' || type === 'phone' ? 'text' : type}
        placeholder="Type here"
        className="input input-bordered max-w-full w-full "
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </label>
  );
};

export default FormTextField;