import styled from "styled-components/native";

// @ts-ignore
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  border-radius: 8px;
  border: 2px solid
    ${({ type, theme }) =>
      type === "income" ? theme.COLORS.GREEN : theme.COLORS.RED};
`;

// @ts-ignore
export const Content = styled.View``;

// @ts-ignore
export const Options = styled.View`
  flex-direction: row;
  align-items: end;
`;

// @ts-ignore
export const OptionButton = styled.TouchableOpacity``;
