import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components";
import Icon from "@expo/vector-icons/FontAwesome";

import { Container } from "./styles";

export function GoBackButton() {
  const navigation = useNavigation();
  // @ts-ignore
  const { COLORS } = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container onPress={handleGoBack}>
      <Icon name="arrow-left" size={24} color={COLORS.WHITE} />
    </Container>
  );
}
