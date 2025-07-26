import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '../Input';
import { SignUpFormData } from './signUpSchema';

export function BirthDateStep() {
  const { control } = useFormContext<SignUpFormData>();

  return (
    <Controller
      control={control}
      name="birthDate"
      render={({ field, fieldState }) => (
        <Input
          label="Data de nascimento"
          mask="99/99/9999"
          placeholder="DD/MM/AAAA"
          value={field.value}
          onChangeText={field.onChange}
          error={fieldState.error?.message}
          keyboardType="numeric"
        />
      )}
    />
  );
}