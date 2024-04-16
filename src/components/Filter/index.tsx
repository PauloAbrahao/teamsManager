import {Container, Title} from "./styles";
import {FilterProps} from "src/@types";

export function Filter({title, isActive = false, ...rest}: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
