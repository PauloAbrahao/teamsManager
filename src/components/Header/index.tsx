import {LogoIcon} from "@assets/icons";
import {BackIcon, BackButton, Container} from "./styles";
import {useNavigation} from "@react-navigation/native";
import {HeaderProps} from "src/@types";

export const Header = ({showBackButton = false}: HeaderProps) => {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <LogoIcon width={64} height={64} />
    </Container>
  );
};
