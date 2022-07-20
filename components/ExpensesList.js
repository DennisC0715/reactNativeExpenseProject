import { FlatList, StyleSheet, View, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenses = (itemData) => {
  return (
    <View>
      <ExpenseItem
        descriptions={itemData.item.descriptions}
        amount={itemData.item.amount}
        date={itemData.item.date}
        id={itemData.item.id}
      />
    </View>
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenses}
    />
  );
};

export default ExpensesList;
