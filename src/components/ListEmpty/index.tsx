import {ListEmptyProps} from "src/@types";
import {Container, Message} from "./styles";

export const ListEmpty = ({message}: ListEmptyProps) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};
