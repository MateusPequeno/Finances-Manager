import React, { useRef, useState } from "react";
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
import { Button } from "../../../src/components/Button";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../styles/cssconfig";
import bckImage from "../../../assets/blueBck.jpg";
import { addTransaction } from "../../store/actions/transactionActions";
import { useDispatch } from "react-redux";

export function OutcomesInsert() {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();
  const [selectedCategory, setselectedCategory] = useState();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const titleRef = useRef(null);
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
    setIsFilled(!!price);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleSubmit() {
    navigation.navigate("Overview");
    const transaction = { price, title };
    if (!price || !title) return alert("Insira os detalhes");
    dispatch(addTransaction(transaction));
    setPrice("");
    setTitle("");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <View style={styles.form}>
                <Text style={styles.title}>Inserir nova despesa</Text>
                <Text style={styles.subTitle}>Título:</Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" }, //&& seria o então
                  ]}
                  placeholder="Nome da despesa "
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  defaultValue={title}
                  onChangeText={(title) => setTitle(title)}
                />
                <Text style={styles.subTitle}>Valor da despesa :</Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" }, //&& seria o então
                  ]}
                  placeholder="R$ -00.00"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  keyboardType="number-pad"
                  onChangeText={(price) => setPrice(price)}
                  defaultValue={price}
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

                <Text style={styles.subTitle}>Repetir:</Text>
                <View style={styles.rowConfig}>
                  <CheckBox
                    style={styles.checkBox}
                    value={isSelected}
                    onValueChange={setSelection}
                  />
                  <Text style={styles.subTitle}>
                    {isSelected
                      ? "É uma despesa fixa"
                      : "Não é uma despesa fixa"}
                  </Text>
                </View>
                <Button title={"Confirmar"} onPress={handleSubmit} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
