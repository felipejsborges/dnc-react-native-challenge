import React, { useEffect, useState } from "react";

import {
  createTransaction,
  getTransaction,
  updateTransaction,
} from "../../api";

import { GoBackButton } from "../../components/GoBackButton";
import { RadioGroup } from "../../components/RadioGroup";
import { Input } from "../../components/Input";

import { Container, Form, SaveButton, SaveButtonText } from "./styles";

const radioGroupOptions = [
  {
    label: "Entrada",
    value: "income",
  },
  {
    label: "Saída",
    value: "outcome",
  },
];

export function TransactionForm({ route, navigation }) {
  const { id } = route.params || {};

  const [transaction, setTransaction] = useState({});

  function handleChangeInput(name, value) {
    setTransaction((previousTransaction) => ({
      ...previousTransaction,
      [name]: value,
    }));
  }

  async function handleSaveTransaction() {
    if (id) {
      await updateTransaction(id, transaction);
    } else {
      await createTransaction({ ...transaction });
    }
    navigation.goBack();
  }

  useEffect(() => {
    if (id) {
      getTransaction(id).then((response) => setTransaction(response));
    }
  }, [id]);

  return (
    <Container>
      <GoBackButton />
      <Form>
        <Input
          // @ts-ignore
          value={transaction.title}
          onChangeText={(value) => handleChangeInput("title", value)}
          label="Título"
        />
        <Input
          // @ts-ignore
          value={String(transaction.value || 0)}
          keyboardType="numeric"
          onChangeText={(value) => handleChangeInput("value", value)}
          label="Valor"
        />
        <RadioGroup
          options={radioGroupOptions}
          onChange={(value) => handleChangeInput("type", value)}
          // @ts-ignore
          selected={transaction.type}
        />
        <Input
          // @ts-ignore
          value={transaction.date}
          onChangeText={(value) => handleChangeInput("date", value)}
          label="Data"
        />

        <SaveButton onPress={handleSaveTransaction}>
          <SaveButtonText>Salvar transação</SaveButtonText>
        </SaveButton>
      </Form>
    </Container>
  );
}
