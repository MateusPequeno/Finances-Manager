import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_GOAL,
} from "../actions/types";

const initialState = {
  transactions: [
    { addedtime: 1576590342000, id: 2, title: "Almoço ", price: -20 },
    { addedtime: 1576590342000, id: 3, title: "Salário", price: 800 },
    { addedtime: 1274174256000, id: 4, title: "Saldo no Banco", price: 2000 },
    { addedtime: 1274174256000, id: 5, title: "Calça Jeans", price: -60 },
    { addedtime: 1274174256000, id: 6, title: "Transporte", price: -10 },
    { addedtime: 779879856000, id: 7, title: "Conta de luz ", price: -90 },
    { addedtime: 779879856000, id: 9, title: "Conta de água", price: -50 },
    { addedtime: 779879856000, id: 10, title: "Venda da Moto", price: 6000 },
    { addedtime: 1613682000000, id: 11, title: "Doação", price: -60 },
  ],
  goals: [
    { id: 1, goalTitle: "Casa Própia ", goalPrice: 200000 },
    { id: 2, goalTitle: "Carro Própio ", goalPrice: 60000 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [payload, ...state.goals],
      };
    default:
      return state;
  }
};
