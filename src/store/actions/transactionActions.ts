import moment from "moment";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  ADD_GOAL,
  DELETE_GOAL,
} from "./types";
interface AddTransactionProps {
  title?: string;
  price?: number;
  addedTime?: any;
}
interface AddGoalProps {
  goalTitle?: string;
  goalPrice?: number;
}

export const addTransaction =
  ({ title, price, addedTime }: AddTransactionProps) =>
  (dispatch) => {
    const id = Math.floor(Math.random() * 600000);

    const newTransaction = {
      id,
      title,
      price: +price,
      addedTime,
    };

    dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
  };

export const addGoal =
  ({ goalTitle, goalPrice }: AddGoalProps) =>
  (dispatch) => {
    const id = Math.floor(Math.random() * 600000);

    const newGoal = {
      id,
      goalTitle,
      goalPrice: +goalPrice,
    };

    dispatch({ type: ADD_GOAL, payload: newGoal });
  };

export const deleteTransaction = (id) => (dispatch, getState) => {
  dispatch({ type: DELETE_TRANSACTION, payload: id });
};

export const deleteGoal = (id) => (dispatch, getState) => {
  dispatch({ type: DELETE_GOAL, payload: id });
};
/*
export const mainTime = () => {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  var currentTime = new Date();
  // returns the month (from 0 to 11)
  var month = currentTime.getMonth() + 1;

  // returns the day of the month (from 1 to 31)
  var day = currentTime.getDate();

  // returns the year (four digits)
  var year = currentTime.getFullYear();

  // write output MM/dd/yyyy
  const MiliTime = year + "-" + pad(month) + "-" + pad(day);

  // const mainTime = moment(`${a}T00:00:00`).valueOf();
  return moment(`${MiliTime}T00:00:00`).valueOf();
};
*/
