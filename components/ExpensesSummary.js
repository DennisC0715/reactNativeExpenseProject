import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const ExpensesSummary = ({ period, expenses }) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={css.container}>
      <Text style={css.period}>{period}</Text>
      <Text style={css.text}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const css = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  text: {
    fontSize: 12,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
