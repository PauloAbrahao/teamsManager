import {Container, Icon} from "./styles";
import {ButtonIconProps} from "src/@types";

export const ButtonIcon = ({
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};
