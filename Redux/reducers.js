import { createSlice } from "@reduxjs/toolkit";

const Dummy_Expenses = [
  {
    id: "e1",
    amount: 79.99,
    descriptions: "a pair of shoe",
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    amount: 9.99,
    descriptions: "banana",
    date: new Date("2022-07-05"),
  },
  {
    id: "e3",
    amount: 159.99,
    descriptions: "grocery",
    date: new Date("2022-07-15"),
  },
  {
    id: "e4",
    amount: 849.99,
    descriptions: "computer",
    date: new Date("2022-07-16"),
  },
  {
    id: "e5",
    amount: 2000.99,
    descriptions: "Gazepo",
    date: new Date("2022-07-18"),
  },
  {
    id: "e6",
    amount: 59.99,
    descriptions: "beef",
    date: new Date("2021-12-10"),
  },
];

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: { expenses: Dummy_Expenses },
  reducers: {
    addExpense: (state, action) => {
      const id = `e${state.expenses.length + 1}`;
      console.log(id);
      state.expenses = [...state.expenses, { ...action.payload, id: id }];
      console.log(state.expenses);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
    updateExpense: (state, action) => {
      const editedItem = state.action.payload;
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
