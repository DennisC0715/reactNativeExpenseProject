import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={css.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={css.container}>
      <ExpensesSummary expenses={expenses} period={expensesPeriod} />
      {content}
    </View>
  );
};
export default ExpenseOutput;

const css = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
