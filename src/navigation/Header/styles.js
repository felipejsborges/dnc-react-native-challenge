import styled from "styled-components/native";

// @ts-ignore
export const Container = styled.View`
  background-color: #0c70f2;
  height: 56px;
	flex-direction: row;
	align-items: center;
	padding: 0 16px;
`;

// @ts-ignore
export const Logo = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_EXTRA_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
