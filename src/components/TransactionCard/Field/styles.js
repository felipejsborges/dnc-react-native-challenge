import styled from "styled-components/native";

// @ts-ignore
export const Container = styled.View`
  flex-direction: row;
`;

// @ts-ignore
const CommonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

// @ts-ignore
export const Label = styled(CommonText)``;

// @ts-ignore
export const Value = styled(CommonText)`
  margin-left: 4px;
`;
