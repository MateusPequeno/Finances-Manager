import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import UserImg from "../../../assets/UserAvatar.png";
import styles from "./styles";

export function Heading() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@tcc-app:user");
      setUserName(user || "");
    }
    loadStorageUserName();
  }, [userName]);

  return (
    <View style={styles.containerDashboard}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={UserImg} style={styles.imageProf} />
    </View>
  );
}
