import React, { useState } from 'react';
import FormTextField, { FormTextFieldType } from "../../../components/FormTextField";

type InputField = {
  label: string;
  type: FormTextFieldType;
};

type InitialStateType = {
  [key: string]: string;
};

const inputFields: InputField[] = [
  { label: "Data de Nascimento", type: "date" },
  { label: "Telefone", type: "phone" },
  { label: "Endereço de Email", type: "text" },
  { label: "CPF", type: "doc" },
  { label: "Ocupação", type: "text" },
  { label: "Origem", type: "text" },
  { label: "Primaira Consulta", type: "date" },
  { label: "Recorrência", type: "date" },
];

const initialState = inputFields.reduce<InitialStateType>((acc, field) => {
  acc[field.label] = "";
  return acc;
}, {});

const ClientInfoForm = () => {
  const [fieldValues, setFieldValues] = useState<InitialStateType>(initialState);

  const handleChange = (label: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [label]: value }));
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Informações do Cliente</h2>
      <div className="grid grid-cols-2 gap-4 pr-20">
        {inputFields.map((field, index) => (
          <FormTextField
            key={index}
            label={field.label}
            value={fieldValues[field.label]}
            onChange={(e) => handleChange(field.label, e.target.value)}
            type={field.type}
          />
        ))}
      </div>
    </>
  );
};

export default ClientInfoForm;