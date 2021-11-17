import React, { InputHTMLAttributes } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import styles from "../styles/cssconfig";
import { Feather } from "@expo/vector-icons";

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
