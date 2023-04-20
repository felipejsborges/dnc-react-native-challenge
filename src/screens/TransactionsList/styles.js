import styled from "styled-components/native";

// @ts-ignore
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 48px 32px;
`;

// @ts-ignore
export const AddTransactionButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 8px;
`;

// @ts-ignore
export const AddTransactionButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.RALEWAY_SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
