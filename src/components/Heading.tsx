import React, { useEffect, useState } from "react";
import { Text, Image, View, AsyncStorage } from "react-native";
import UserImg from "../../assets/UserAvatar.png";
import styles from "../styles/cssconfig";

export function Heading() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@pcc-app:user");
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
