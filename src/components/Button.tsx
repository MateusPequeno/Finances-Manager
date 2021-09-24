import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  // ?: Opcional
}
/*Cria a tipagem para o botão, definindo o titulo como string,
e extende todas as propriedades do TouchableOpacityProps
Assim posso definir o title no return {title}
e mudar o titulo do botão mais fácilmente
obs: ...rest (resto das propriedades do opacity)
*/
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
      <Feather name="arrow-right" style={styles.buttonIcon} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC062",
    height: 56,
    width: 344,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  buttonIcon: {
    fontSize: 30,
    color: "#8d8989ca",
    //Definindo a posição do icone e tamanho
    position: "absolute",
    right: 13,
    top: 12.5,
  },
});
