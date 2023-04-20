import React, { useCallback, useState } from "react";
import { ScrollView } from "react-native";

import { getTransactions } from "../../api";

import {
  Container,
  AddTransactionButton,
  AddTransactionButtonText,
} from "./styles";

import { useFocusEffect } from "@react-navigation/native";
import { TransactionCard } from "../../components/TransactionCard";

export function TransactionsList({ navigation }) {
  const [transactions, setTransactions] = useState([]);

  function handlePressToAddTransaction() {
    navigation.navigate("TransactionForm");
  }

  function fetchTransactions() {
    getTransactions().then((response) => setTransactions(response));
  }

  useFocusEffect(
    useCallback(() => {
      fetchTransactions();
    }, [])
  );

  return (
    <Container>
      <ScrollView>
        {transactions.map((transaction) => (
          <TransactionCard
            // @ts-ignore
            key={transaction.id}
            navigation={navigation}
            fetchTransactions={fetchTransactions}
            // @ts-ignore
            {...transaction}
          />
        ))}
      </ScrollView>

      <AddTransactionButton onPress={handlePressToAddTransaction}>
        <AddTransactionButtonText>Adicionar transação</AddTransactionButtonText>
      </AddTransactionButton>
    </Container>
  );
}
