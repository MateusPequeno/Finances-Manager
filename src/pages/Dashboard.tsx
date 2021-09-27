import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, Image, View, Button } from "react-native";
import UserImg from "../../assets/UserAvatar.png";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles/cssconfig";
export function Dashboard() {
  //ARMAZENAR ESTADO
  const navigation = useNavigation();
  function handleBalancePress() {
    navigation.navigate("BalanceInsert");
  }
  function handleIncomesIconPress() {
    navigation.navigate("IncomesInsert");
  }
  function handleOutcomesIconPress() {
    navigation.navigate("OutcomesInsert");
  }
  const [userName, setUserName] = useState<string>();
  const [userBalance, setUserBalance] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@pcc-app:user");
      setUserName(user || "");
    }
    loadStorageUserName();
  }, [userName]);
  useEffect(() => {
    async function loadStorageUserBalance() {
      const balance = await AsyncStorage.getItem("@pcc-app:balance");
      setUserBalance(balance || "");
    }
    loadStorageUserBalance();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.containerDashboard}>
          <View>
            <Text style={styles.greeting}>Olá</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
          <Image source={UserImg} style={styles.imageProf} />
        </View>
        <View style={styles.card}>
          <Text style={styles.saldoGeral} onPress={handleBalancePress}>
            Saldo Geral:
          </Text>
          <Text onPress={handleBalancePress} style={styles.saldoGeral}>
            R$ :{userBalance}
          </Text>
          <AntDesign name="eye" size={20} color="grey" />
          <View style={styles.incomesAndDebt}>
            <SimpleLineIcons
              name="arrow-down-circle"
              size={50}
              color={"red"}
              onPress={handleOutcomesIconPress}
            />
            <View style={styles.textosIncAndDebt}>
              <Text style={styles.despesa}> Despesas </Text>
              <Text style={styles.despesaValor}> R$ : 4500.00 </Text>
            </View>
            <SimpleLineIcons
              name="arrow-up-circle"
              size={50}
              color={"green"}
              onPress={handleIncomesIconPress}
            />
            <View style={styles.textosIncAndDebt}>
              <Text style={styles.rendimento}> Rendimentos </Text>
              <Text style={styles.rendimentoValor}> R$ : 6000.00 </Text>
            </View>
          </View>
        </View>
        <Text style={styles.despesasCatego}>Despesas por categoria:</Text>
        <Text style={styles.despesasCatego}>Metas/objetivos:</Text>
        <Text style={styles.despesasCatego}>
          Gráfico rendimento - despesas:
        </Text>
        <Text style={styles.despesasCatego}>Definir Limites de gastos:</Text>
        <Text style={styles.despesasCatego}>
          Gráfico de desempenho dos rendimentos:
        </Text>
        <Text style={styles.despesasCatego}>
          Gráfico de desempenho das despesas:
        </Text>
      </ScrollView>
    </>
  );
}
