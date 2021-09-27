import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  CheckBox,
  TextInput,
  Platform,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../src/components/Button";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/cssconfig";
import bckImage from "../../assets/blueBck.jpg";

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
    navigation.navigate("Overview");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
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
                <Text style={styles.subTitle}>Data:</Text>
                <Button
                  onPress={showDatepicker}
                  style={styles.dateButton}
                  title="Insira a data"
                />
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
                    {isSelected
                      ? "É uma receita fixa"
                      : "Não é uma receita fixa"}
                  </Text>
                </View>
                <Button title={"Vamos la!"} onPress={handleNextPage} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
