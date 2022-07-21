import { View, StyleSheet, Text, Pressable } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../Button";
import { getFormattedDate } from "../ExpenseItem";
import { Keyboard } from "react-native";
import DismissKeyboard from "./DismissKeyboard";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, editItem }) => {
  const [inputValue, setInputValue] = useState(
    isEditing
      ? {
          amount: editItem.amount.toString(),
          date: getFormattedDate(editItem.date),
          description: editItem.descriptions,
        }
      : {
          amount: "",
          date: "",
          description: "",
        }
  );

  const inputChange = (inputIdentifier, enteredInput) => {
    setInputValue((currentInput) => {
      return { ...currentInput, [inputIdentifier]: enteredInput };
    });
  };
  const submitForm = () => {
    const expenseData = {
      id: isEditing ? editItem.id : null,
      amount: +inputValue.amount,
      date: new Date(inputValue.date),
      descriptions: inputValue.description,
    };
    onSubmit(expenseData);
  };

  return (
    <DismissKeyboard>
      <View style={css.form}>
        <Text style={css.title}>Your Expense</Text>

        <View style={css.inputRow}>
          <Input
            style={css.inputRowStyle}
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChange.bind(this, "amount"),
              value: inputValue.amount,
            }}
          />
          <Input
            style={css.inputRowStyle}
            label="Date"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              onChangeText: inputChange.bind(this, "date"),
              value: inputValue.date,
              maxLength: 10,
            }}
          />
        </View>

        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            onChangeText: inputChange.bind(this, "description"),
            value: inputValue.description,
          }}
        />
        <View style={css.buttonContainer}>
          <Button mode="flat" onPress={onCancel} style={{ width: "45%" }}>
            Cancel
          </Button>
          <Button onPress={submitForm} style={{ width: "45%" }}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default ExpenseForm;

const css = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputRowStyle: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
});
