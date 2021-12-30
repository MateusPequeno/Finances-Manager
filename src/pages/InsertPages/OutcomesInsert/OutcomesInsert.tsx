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
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../../../src/components/Button/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import bckImage from "../../../../assets/blueBck.jpg";
import { addTransaction } from "../../../store/actions/transactionActions";
import { useDispatch } from "react-redux";
import { SimpleLineIcons } from "@expo/vector-icons";
import moment from "moment";

export function OutcomesInsert() {
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isSelected, setSelection] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [title, setTitle] = useState<string>();
  const [addedTime, setAddedTime] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState<boolean>(false);
  const titleRef = useRef(null);
  const navigation = useNavigation();
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || addedTime;
    setAddedTime(currentDate);
    console.log("ADDED TIME: ", addedTime);
    console.log("CURRENT: ", currentDate);
    setShow(Platform.OS === "ios");
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
    if (!price || !title) return alert("Insira os detalhes corretamente. ");
    dispatch(addTransaction(transaction));
    setPrice(0);
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
                  placeholder="R$ 00.00"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  keyboardType="number-pad"
                  onChangeText={(price) => setPrice(price * -1)}
                  
                />

                <Text style={styles.subTitle}>Data:</Text>
                <TouchableOpacity
                  style={styles.dataBarView}
                  onPress={showDatepicker}
                >
                  <Text style={styles.input}>
                    {addedTime !== new Date()
                      ? moment(addedTime).format("D/MM/Y")
                      : "01/01/2021"}
                  </Text>
                  <SimpleLineIcons
                    name="calendar"
                    style={{ marginLeft: -60, paddingTop: 12 }}
                    size={35}
                    color="#443C8A"
                    onPress={showDatepicker}
                  />
                </TouchableOpacity>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={addedTime}
                    mode={mode}
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
