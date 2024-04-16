import {Container, Title} from "./styles";
import {ButtonProps} from "src/@types";

export function Button({title, type = "PRIMARY", ...rest}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
