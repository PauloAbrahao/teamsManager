import {Container, Icon, Title} from "./styles";
import {GroupCardProps} from "src/@types";

export const GroupCard = ({title, ...rest}: GroupCardProps) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};
