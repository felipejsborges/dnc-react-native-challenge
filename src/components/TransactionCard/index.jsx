import React from "react";

import { useTheme } from "styled-components";
import Icon from "@expo/vector-icons/FontAwesome";

import { deleteTransaction } from "../../api";
import { numberToReal } from "../../utils";

import { Field } from "./Field";

import { Container, Content, Options, OptionButton } from "./styles";

export function TransactionCard({
  navigation,
  fetchTransactions,
  id,
  title,
  value,
  date,
  type,
}) {
  // @ts-ignore
  const { COLORS } = useTheme();

  function handleClickToEditTransaction() {
    navigation.navigate("TransactionForm", { id });
  }

  async function handleDeleteTransaction() {
    await deleteTransaction(id);
    fetchTransactions();
  }

  return (
    <Container type={type}>
      <Content>
        <Field label="Título" value={title} />
        <Field label="Valor" value={numberToReal(value)} />
        <Field label="Data" value={date} />
      </Content>
      <Options>
        <OptionButton onPress={handleClickToEditTransaction}>
          <Icon name="pencil" size={24} color={COLORS.BLACK} />
        </OptionButton>
        <OptionButton
          style={{ marginLeft: 8 }}
          onPress={handleDeleteTransaction}
        >
          <Icon name="trash" size={24} color={COLORS.BLACK} />
        </OptionButton>
      </Options>
    </Container>
  );
}
