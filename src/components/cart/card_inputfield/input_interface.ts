export type InputFieldProps = {
  type: string;
  placeholder: string;
  value: string;
  isCardInput?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export type CardGroupInputFieldProps = {
  label1?: string;
  label2?: string;
  label3?: string;
  type1: string;
  type2: string;
  type3: string;
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
  value1: string;
  value2: string;
  value3: string;
  onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export type BillingAddressInputFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  isCardInput?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}