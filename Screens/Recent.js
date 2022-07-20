import React from "react";
import { Text } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import { useSelector } from "react-redux";

export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

const Recent = () => {
  const expenseData = useSelector((state) => state.expense.expenses);

  const recentExpenses = expenseData.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensesPeriod="Lats 7 Days"
      fallbackText="Oops, looks like you don't have any expenses in last 7 days!Q"
    />
  );
};

export default Recent;
