import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  CheckBox,
  TextInput,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../src/components/Button";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import fonts from "../styles/fonts";
export function IncomesInsert() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [valor, setValor] = useState(); // para tipar o dado se coloca o string
  const [selectedCategory, setselectedCategory] = useState();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!valor);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleNextPage() {
    navigation.navigate("IncomesInsert");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.title}>Inserir novo rendimento</Text>
              <Text style={styles.subTitle}>Valor do rendimento :</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: "#FFC062" }, //&& seria o então
                ]}
                placeholder="R$ 00.00"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
              <Button onPress={showDatepicker} title="Show date picker!" />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
              <Text style={styles.subTitle}>Data:</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: "#FFC062" }, //&& seria o então
                ]}
                placeholder="01/01/2021"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
              />
              <Text style={styles.subTitle}>Categorias:</Text>
              <View style={styles.extraPicker}>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue, itemIndex) =>
                    setselectedCategory(itemValue)
                  }
                >
                  <Picker.Item label="Salário" value="salario" />
                  <Picker.Item label="Emprestimos" value="emprestimos" />
                  <Picker.Item label="Investimentos" value="investimentos" />
                  <Picker.Item label="Outros" value="outros" />
                </Picker>
              </View>
              <Text style={styles.subTitle}>Repetir:</Text>
              <View style={styles.rowConfig}>
                <CheckBox
                  style={styles.checkBox}
                  value={isSelected}
                  onValueChange={setSelection}
                />
                <Text style={styles.subTitle}>
                  {isSelected ? "É uma receita fixa" : "Não é uma receita fixa"}
                </Text>
              </View>
              <Button title={"Vamos la!"} onPress={handleNextPage} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1932B1",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fcfcfc",
    backgroundColor: "#ffffff",
    color: "#000",
    width: "100%",
    fontSize: 18,
    marginTop: 15,
    padding: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  title: {
    marginTop: 20, // Espaço o titulo do icone
    fontSize: 20,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.heading,
  },
  subTitle: {
    marginTop: 10, // Espaço o titulo do icone
    fontSize: 25,
    lineHeight: 32,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: fonts.text,
  },
  rowConfig: {
    marginTop: 10,
    flexDirection: "row",
  },
  checkBox: {
    height: 50,
    width: 50,
  },
  picker: {
    color: "#000000",
    marginTop: 10,
    padding: 0,
    textAlign: "center",
  },
  extraPicker: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    height: "6%",
    fontSize: 50,
  },
});
