import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.containerButton} {...rest}>
      <Text style={styles.textButton}>{title}</Text>
      <Feather name="arrow-right" style={styles.buttonIcon} />
    </TouchableOpacity>
  );
}
