import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

// @ts-ignore
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 48px 32px;
`;

// @ts-ignore
export const Form = styled.View`
  flex: 1;
`;

// @ts-ignore
export const SaveButton = styled(TouchableOpacity)`
  height: 56px;
  background: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

// @ts-ignore
export const SaveButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.RALEWAY_SEMI_BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;
