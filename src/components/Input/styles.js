import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

// @ts-ignore
export const Container = styled.View`
  margin-top: 24px;
`;

// @ts-ignore
export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.POPPINS_MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

// @ts-ignore
export const _Input = styled(TextInput)`
  height: 56px;
  border-radius: 8px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONT_FAMILY.POPPINS_MEDIUM};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
