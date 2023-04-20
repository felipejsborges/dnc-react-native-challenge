import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// @ts-ignore
export const Container = styled(TouchableOpacity)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.POPPINS_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
