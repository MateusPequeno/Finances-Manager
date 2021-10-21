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
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../styles/cssconfig";
import bckImage from "../../../assets/blueBck.jpg";
import { addGoal } from "../../store/actions/transactionActions";
import { useDispatch } from "react-redux";

export function GoalsInsert() {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [goalPrice, setGoalPrice] = useState();
  const [goalTitle, setGoalTitle] = useState();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const goalsTitleRef = useRef(null);
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
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!goalPrice);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleSubmit() {
    navigation.navigate("Overview");
    const goals = { goalPrice, goalTitle };
    if (!goalPrice || !goalTitle) return alert("Insira os detalhes");
    dispatch(addGoal(goals));
    setGoalPrice("");
    setGoalTitle("");
  }
  return (
    <ImageBackground source={bckImage} style={styles.bckImage}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <View style={styles.form}>
                <Text style={styles.title}>Inserir nova Meta</Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" },
                  ]}
                  placeholder="Nome da Meta"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  defaultValue={goalTitle}
                  onChangeText={(goalTitle) => setGoalTitle(goalTitle)}
                />
                <Text style={styles.subTitle}> Preço da meta :</Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: "#FFC062" }, //&& seria o então
                  ]}
                  placeholder="R$ 00.00"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  keyboardType="number-pad"
                  onChangeText={(goalPrice) => setGoalPrice(goalPrice)}
                  defaultValue={goalPrice}
                />

                <Button title={"Confirmar"} onPress={handleSubmit} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}
