import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles/cssconfig";
import { useSelector, useDispatch } from "react-redux";
import { Heading } from "../components/Heading";
import { CategoryGraph } from "../pages/Graphs/CategoryGraph";
import { GoalsGraph } from "../pages/Graphs/GoalsGraph";
import { marginBottom } from "styled-system";

export function Dashboard() {
  const dispatch = useDispatch();
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
  //const [userBalance, setUserBalance] = useState<string>();
  /*
  useEffect(() => {
    async function loadStorageUserBalance() {
      const balance = await AsyncStorage.getItem("@pcc-app:balance");
      setUserBalance(balance || "");
    }
    loadStorageUserBalance();
  }, [userBalance]);*/
  const dispatchDashboard = useDispatch();
  const { transactions } = useSelector((state) => state.trs);
  const prices = transactions.map((transaction: any) => transaction.price);
  const balance = prices.reduce(
    (prev: number, cur: number) => (prev += cur),
    0
  );
  const expense =
    prices
      .filter((price: number) => price < 0)
      .reduce((prev: number, cur: number) => (prev += cur), 0) * -1;

  const income = expense + balance;

  return (
    <ScrollView>
      <Heading />
      <View style={styles.card}>
        <Text style={styles.saldoGeral} onPress={handleBalancePress}>
          Saldo Geral:
        </Text>
        <Text onPress={handleBalancePress} style={styles.saldoGeral}>
          R$ :{balance}
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
            <Text style={styles.despesaValor}> R$ : {expense} </Text>
          </View>
          <SimpleLineIcons
            name="arrow-up-circle"
            size={50}
            color={"green"}
            onPress={handleIncomesIconPress}
          />
          <View style={styles.textosIncAndDebt}>
            <Text style={styles.rendimento}> Rendimentos </Text>
            <Text style={styles.rendimentoValor}> R$ :{income}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.despesasCatego}>Despesas por categoria:</Text>
      </View>
      <Text style={styles.despesasCatego}>Metas/objetivos:</Text>
      <GoalsGraph />
      <Text style={styles.despesasCatego}>Gráfico rendimento - despesas:</Text>
      <Text style={styles.despesasCatego}>Definir Limites de gastos:</Text>
      <Text style={styles.despesasCatego}>
        Gráfico de desempenho dos rendimentos:
      </Text>
      <Text style={styles.despesasCatego}>
        Gráfico de desempenho das despesas:
      </Text>
    </ScrollView>
  );
}
