import { HighLightProps } from "src/@types";
import {Container, Subtitle, Title} from "./styles";

export const Highlight = ({title, subtitle}: HighLightProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
