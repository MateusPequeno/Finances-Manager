import React, { InputHTMLAttributes } from "react";
import { TextInput } from "react-native";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: any;
}

export function InputComponent({ ...rest }: InputProps) {
  return (
    <TextInput
      {...rest}
      name={rest.name}
      type={rest.type}
      onChange={rest.onChange}
    />
  );
}
