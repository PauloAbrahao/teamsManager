import {LogoIcon} from "@assets/icons";
import {BackIcon, BackButton, Container} from "./styles";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({showBackButton = false}: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <LogoIcon width={64} height={64} />
    </Container>
  );
};
