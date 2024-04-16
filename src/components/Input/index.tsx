import { Container } from "./styles";
import { useTheme } from "styled-components";
import { InputProps } from "src/@types";

export function Input({inputRef, ...rest}: InputProps) {
  const {COLORS} = useTheme();

  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}